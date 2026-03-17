# Maintainer Notes

## Key Commands

- npm ci
- npm run type-check
- npm run build
- npm run smoke
- npm run canvas

## Key Files

- package.json: scripts, package metadata, publish config
- src/server.ts: canvas server routes and WebSocket behavior
- frontend/src/App.tsx: Excalidraw frontend integration
- .github/workflows/ci.yml: required verification in CI
- .github/workflows/docker.yml: image publishing and container smoke checks
- .github/workflows/npm-publish.yml: package publication workflow

## Ownership Notes

- origin should remain the kakacoding1 fork.
- upstream can track the original repository for selective syncs.
- Maintenance plans live under docs/plans/.

## Review Expectations

- Require verification notes in every pull request.
- Prefer linking PRs to existing backlog issues.
- Close synthetic test PRs instead of merging them.# Maintainer Notes

## Key Commands

- npm ci
- npm run type-check
- npm run build
- npm run smoke
- npm run canvas

## Key Files

- package.json: scripts, package metadata, publish config
- src/server.ts: canvas server routes and WebSocket behavior
- frontend/src/App.tsx: Excalidraw frontend integration
- .github/workflows/ci.yml: required verification in CI
- .github/workflows/docker.yml: image publishing and container smoke checks
- .github/workflows/npm-publish.yml: package publication workflow

## Ownership Notes

- origin should remain the kakacoding1 fork.
- upstream can track the original repository for selective syncs.
- Maintenance plans live under docs/plans/.

## Review Expectations

- Require verification notes in every pull request.
- Prefer linking PRs to existing backlog issues.
- Close synthetic test PRs instead of merging them.