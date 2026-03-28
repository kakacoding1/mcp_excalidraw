import { spawn } from 'node:child_process';
import process from 'node:process';
import { setTimeout as delay } from 'node:timers/promises';

const host = '127.0.0.1';
const port = Number(process.env.SMOKE_PORT || 3210);
const serverUrl = `http://${host}:${port}`;

function stopChild(child) {
  if (!child.killed) {
    child.kill('SIGTERM');
  }
}

async function waitForHealth(endpoint, attempts = 30) {
  let lastError;

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Unexpected status ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      lastError = error;
      await delay(500);
    }
  }

  throw lastError ?? new Error('Timed out waiting for the health endpoint');
}

async function run() {
  const child = spawn(process.execPath, ['dist/server.js'], {
    env: {
      ...process.env,
      HOST: host,
      PORT: String(port)
    },
    stdio: ['ignore', 'pipe', 'pipe']
  });

  let stderr = '';
  child.stderr.on('data', (chunk) => {
    stderr += chunk.toString();
  });

  child.on('exit', (code) => {
    if (code !== null && code !== 0) {
      console.error(`Smoke test server exited early with code ${code}`);
      if (stderr) {
        console.error(stderr.trim());
      }
    }
  });

  try {
    const payload = await waitForHealth(`${serverUrl}/api/health`);

    if (payload.status !== 'ok' || payload.service !== 'mcp-excalidraw-canvas') {
      throw new Error(`Unexpected health payload: ${JSON.stringify(payload)}`);
    }

    console.log(`Smoke test passed against ${serverUrl}`);
  } finally {
    stopChild(child);
    await delay(250);
  }
}

run().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});