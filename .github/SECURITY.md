# Security Policy

## Supported Versions

We are committed to providing a secure product. For the most up-to-date information on supported versions and known vulnerabilities, please refer to our **[GitHub Security Advisories](https://github.com/chirag127/PostureGuard-AI-Posture-Correction-Web-App/security/advisories)**.

As of December 2025, the following versions are actively supported and regularly patched:

*   **Main Branch Development:** All code deployed from the `main` branch is considered actively developed and will receive prompt security updates.

## Reporting a Vulnerability

We appreciate your efforts to responsibly disclose security vulnerabilities. Please report any suspected vulnerabilities through the following channels:

1.  **GitHub Security Advisories:** The preferred method is to submit a **private vulnerability report** through GitHub's security advisory feature. This ensures that the vulnerability is handled securely and responsibly before public disclosure.
    *   **Submit a Report:** [https://github.com/chirag127/PostureGuard-AI-Posture-Correction-Web-App/security/advisories/new](https://github.com/chirag127/PostureGuard-AI-Posture-Correction-Web-App/security/advisories/new)

2.  **Email:** If you are unable to use the GitHub feature, you can also send an email to our security team at **security@apex-architects.dev**. Please use a clear subject line such as "Security Vulnerability Report - PostureGuard-AI-Posture-Correction-Web-App".

When reporting a vulnerability, please provide as much detail as possible, including:

*   A clear description of the vulnerability.
*   Steps to reproduce the vulnerability.
*   The impact of the vulnerability.
*   Any suggested mitigation or remediation steps.
*   Proof-of-concept code (if applicable).

## Disclosure Timeline

We aim to acknowledge all security reports within **48 hours**. We will work with security researchers to understand and address reported vulnerabilities in a timely manner. We generally aim to resolve critical vulnerabilities within **14 days**, with a target of **30 days** for less critical issues. Significant vulnerabilities will be disclosed publicly after a fix has been released, following industry best practices.

## Security Best Practices

*   **TypeScript (Strict Mode):** Always use TypeScript in strict mode (`"strict": true` in `tsconfig.json`) to catch potential type errors at compile time, reducing runtime bugs and security risks.
*   **Biome / Ruff:** Ensure these linters and formatters are configured to enforce secure coding standards and catch common vulnerabilities. Run them frequently (`npm run lint`, `npm run format`).
*   **Tauri Security:** Follow Tauri's official security guidelines for native application development. Be cautious when interacting with the operating system and avoid exposing sensitive APIs unnecessarily.
*   **Input Validation:** Rigorously validate all user inputs and data received from external sources to prevent injection attacks and unexpected behavior.
*   **Dependency Management:** Regularly update all project dependencies using `uv` (or equivalent package manager) to incorporate the latest security patches. Use `uv audit` or similar tools to check for known vulnerabilities.
*   **AI Model Security:** When interacting with AI models, sanitize inputs to prevent prompt injection attacks. Be mindful of data privacy and avoid sending sensitive information to third-party AI services unless absolutely necessary and properly secured.
*   **Secrets Management:** Never commit sensitive information (API keys, passwords, private certificates) directly into the codebase. Use environment variables or a dedicated secrets management solution.

## Security Tools & Automation

Our CI/CD pipeline, defined in `.github/workflows/ci.yml`, includes automated security checks such as dependency vulnerability scanning and static analysis to proactively identify potential issues.

---