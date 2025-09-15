# Security Policy for NevroLabs Official Website

Last updated: 2025-09-16

This repository hosts the official website for NevroLabs. Security is a top priority. If you discover a security vulnerability, please follow the responsible disclosure process below.

## Reporting a vulnerability

Do NOT open a public issue for security vulnerabilities. Instead, contact us privately at:

- Email: `nevrolabs@gmail.com`

When reporting, please include:

- A clear title and summary of the issue
- Step-by-step instructions to reproduce the vulnerability (include minimal PoC if possible)
- The affected environment (development, staging, production) and relevant URLs
- Any log output, stack traces, or screenshots that help reproduce the issue
- Your preferred contact email and whether we may follow up publicly once resolved

If you prefer encrypted communication, you may include a PGP key in your message; reply instructions will be provided.

## What to expect

We will acknowledge receipt of your report within 3 business days. Our security team will triage and provide an initial assessment within 10 business days where possible. We will work with you to validate, remediate, and (with your consent) publicly disclose the vulnerability once fixed.

## Response timeline (typical)

- Acknowledgement: within 3 business days
- Triage & initial response: within 10 business days
- Remediation timeline: depends on severity — critical issues will be prioritized for immediate fixes; lower severity items will be scheduled into upcoming sprints
- Public disclosure: coordinated with reporter, after fix and mitigation steps are in place

## Severity classification (guideline)

- Critical: Remote code execution, data breach exposing personal or payment data, leaked production secrets, uncontrolled admin access
- High: Authentication bypasses, exposed sensitive endpoints, privilege escalation
- Medium: Information disclosure of non-sensitive data, predictable resource exhaustion vectors
- Low: Minor misconfigurations or UI issues with minimal security impact

## Scope

In-scope:

- Code and configuration in this repository (`src/`, `docs/`, build scripts, etc.)
- Publicly-deployed website instances owned by NevroLabs using this code

Out-of-scope:

- Third-party systems or integrations (unless demonstrating an exploit that affects our code)
- Attacks that require physical access or social engineering of NevroLabs staff

## Safe harbor & legal

NevroLabs supports good-faith security research. If you follow this policy and do not exceed reasonable limits, we will not pursue legal action against you. Do not access, modify, or destroy customer data beyond what is necessary to demonstrate the issue.

## Disclosure & credit

With your consent, NevroLabs may publicly credit you for responsibly reporting the issue. If you prefer anonymity, please state that in your report.

## Contact

Email: `nevrolabs@gmail.com`

Thank you for helping us keep NevroLabs secure.
