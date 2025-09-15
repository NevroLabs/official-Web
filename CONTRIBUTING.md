# Contributing to NevroLabs Official Website

Thank you for your interest in contributing. This repository hosts the official NevroLabs website. Contributions are strictly limited to authorized NevroLabs employees, company owners, and repository administrators. Unauthorized contributions are not accepted.

If you are not an authorized employee or owner and need changes made (content updates, bug fixes, new pages, etc.), please contact `nevrolabs@gmail.com` with a short summary of the requested change and your organization/role; the team will review and coordinate.

## Who may contribute

- Authorized NevroLabs employees
- Company owners
- Repository administrators (maintainers)

Only the people listed above should push branches or open pull requests in this repository. All changes must follow the workflow below and pass required checks before merging.

## Requesting contributor access

If you believe you should have contributor access, email `nevrolabs@gmail.com` with:

- Your full name
- Work email and GitHub username
- Role and reason for access
- Any required start/end dates (for contractors)

Access is granted at the discretion of NevroLabs leadership and repository administrators.

## Branching & workflow

1. Create a branch from `dev` using a descriptive name. Example:

   ```bash
   git checkout -b feat/team-update/jane-doe dev
   ```

2. Implement your changes on the branch. Keep changes focused and small where possible.

3. Run local checks (lint, typecheck, and tests) before opening a pull request:

   ```bash
   npm install
   npm run lint
   npm run typecheck
   npm test    # if tests are added
   ```

4. Push your branch and open a Pull Request targeting `dev` with a clear description of the change and related issue (if any).

5. The PR must include which maintainers or owners should review, and must reference any related tickets or client approvals.

## Pull request requirements

- PRs must be opened against the `dev` branch.
- Include a short description of the change, motivation, and any screenshots or screenshots for UI changes.
- All automated checks (lint/typecheck/CI) must pass before requesting final review.
- At least one approval from a repository administrator or owner is required before merge.
- Squash merges are preferred for small changes; maintainers may rebase or squash per repo policy.

## Code style and quality

- Follow established TypeScript and React patterns used in the codebase.
- Keep UI and styling consistent with the existing Tailwind + component patterns.
- Add or update unit/integration tests for non-trivial logic when applicable.

## Secrets and sensitive data

- Never commit secrets, API keys, or credentials to the repository.
- Use the provided `.env.example` as guidance for environment variables and keep real values in a local `.env.local` (which must be in `.gitignore`).
- If a secret was accidentally committed, notify repository admins immediately and rotate the secret. Use tools such as BFG or `git filter-repo` to remove secrets from history.

## Security issues

If you discover a security vulnerability, do not open a public issue. Instead, email `nevrolabs@gmail.com` with details of the issue and sensitive information (if necessary). The security team will respond and coordinate remediation.

## Tests & CI

- The repository uses CI (if configured) to run linting, type-checking, and any test suites.
- Ensure your code passes local `npm run lint` and `npm run typecheck` before submitting a PR.

## Documentation & content changes

- Content that appears on the public website (marketing copy, team bios, pricing, etc.) must be reviewed and approved by a designated content owner prior to publishing. Mention the content owner in the PR description.

## Merging & release

- Only repository administrators and owners may merge PRs into `main` as part of an official release process. Regular development work should target `dev` and be merged into `dev` after review. Releases to `main` should follow the internal release checklist.
- For releases or deployments, follow the internal release checklist and deployment process maintained by the DevOps team.

## Enforcement & audit

NevroLabs reserves the right to refuse, revert, or audit any contribution. Repeated violations of these guidelines (sensitive data commits, bypassing review, or unauthorized access) may result in revoked access.

## Questions

If you have any questions about the contribution process or need help preparing a PR, contact `nevrolabs@gmail.com`.

---

This document reflects the contribution policy for the NevroLabs official website repository. Updates to this file may be made by repository administrators.
