# Contributing to mcp_excalidraw

Thanks for contributing. This repository contains two coupled surfaces:

- The MCP server in src/
- The Excalidraw canvas frontend in frontend/

## Local Setup

1. Install dependencies with npm ci.
2. Build the project with npm run build.
3. Start the canvas server with npm run canvas.
4. In another terminal, run the MCP server with node dist/index.js.

For local development, npm run dev keeps the frontend and TypeScript compiler running together.

## Contribution Flow

1. Create a branch from main with a focused name.
2. Make the smallest change that solves one problem.
3. Run the relevant verification commands before opening a pull request.
4. Include before or after screenshots when frontend behavior changes.
5. Link the pull request to an issue whenever possible.

## Verification Checklist

Use the smallest verification set that proves your change:

- npm run type-check
- npm run build
- npm run smoke

If you changed GitHub Actions or release automation, mention what could not be executed locally.

## Repository Layout

- src/: MCP server and HTTP API
- frontend/src/: Excalidraw UI integration
- skills/excalidraw-skill/: reusable agent skill package
- .github/workflows/: CI, Docker, and publish workflows
- docs/plans/: maintenance and implementation plans

## Pull Request Expectations

- Use clear titles that describe the shipped change.
- Add verification notes in the PR body.
- Keep unrelated cleanup out of the same branch.
- Prefer follow-up issues over speculative scope expansion.