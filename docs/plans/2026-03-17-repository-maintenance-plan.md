# Repository Maintenance Plan

## Goal

Stabilize the kakacoding1 fork so contributors can understand ownership, run verification locally, and ship controlled updates through GitHub Actions.

## Current Priorities

1. Refresh repository metadata for the new organization.
2. Document contribution, maintenance, and troubleshooting workflows.
3. Add a health endpoint and a smoke test for server startup.
4. Extend CI to execute the smoke test on pull requests.

## Weekly Operating Rhythm

### Monday

- Review open issues and re-prioritize the milestone.
- Re-check CI status on open pull requests.

### Midweek

- Land one documentation or automation improvement.
- Review container and package metadata for drift.

### Friday

- Confirm main builds cleanly.
- Close stale issues or convert them into scoped backlog items.
- Capture the next week maintenance focus in the milestone notes.

## Required Verification Before Merge

- npm run type-check
- npm run build
- npm run smoke

When a change touches workflows, release automation, or registry publishing, include a note describing what was validated locally and what still requires GitHub-hosted execution.

## Maintainer Checklist

- Keep origin pointed at kakacoding1/mcp_excalidraw.
- Keep upstream available for syncing from the source project when needed.
- Use labels and milestones consistently before opening or merging pull requests.
- Prefer small PRs that close one or two issues instead of batching unrelated changes.

## Backlog Themes

- Documentation quality and onboarding
- Health checks and operational visibility
- CI reliability
- Release and package metadata accuracy# Repository Maintenance Plan

## Goal

Stabilize the kakacoding1 fork so contributors can understand ownership, run verification locally, and ship controlled updates through GitHub Actions.

## Current Priorities

1. Refresh repository metadata for the new organization.
2. Document contribution, maintenance, and troubleshooting workflows.
3. Add a health endpoint and a smoke test for server startup.
4. Extend CI to execute the smoke test on pull requests.

## Weekly Operating Rhythm

### Monday

- Review open issues and re-prioritize the milestone.
- Re-check CI status on open pull requests.

### Midweek

- Land one documentation or automation improvement.
- Review container and package metadata for drift.

### Friday

- Confirm main builds cleanly.
- Close stale issues or convert them into scoped backlog items.
- Capture the next week maintenance focus in the milestone notes.

## Required Verification Before Merge

- npm run type-check
- npm run build
- npm run smoke

When a change touches workflows, release automation, or registry publishing, include a note describing what was validated locally and what still requires GitHub-hosted execution.

## Maintainer Checklist

- Keep origin pointed at kakacoding1/mcp_excalidraw.
- Keep upstream available for syncing from the source project when needed.
- Use labels and milestones consistently before opening or merging pull requests.
- Prefer small PRs that close one or two issues instead of batching unrelated changes.

## Backlog Themes

- Documentation quality and onboarding
- Health checks and operational visibility
- CI reliability
- Release and package metadata accuracy