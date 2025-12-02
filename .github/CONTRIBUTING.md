# Contributing to PostureGuard-AI-Posture-Correction-Web-App

Thank you for your interest in contributing to PostureGuard! We welcome contributions from everyone.

## Code of Conduct

Please read and adhere to our [Code of Conduct](.github/SECURITY.md) to ensure a welcoming and inclusive community.

## How to Contribute

1.  **Fork the Repository:** Create a fork of the `chirag127/PostureGuard-AI-Posture-Correction-Web-App` repository to your GitHub account.
2.  **Clone Your Fork:** Clone the forked repository to your local machine:
    bash
    git clone https://github.com/YOUR-USERNAME/PostureGuard-AI-Posture-Correction-Web-App.git
    cd PostureGuard-AI-Posture-Correction-Web-App
    
3.  **Create a Branch:** Create a new branch for your contribution. Use a descriptive name:
    bash
    git checkout -b feature/your-feature-name
    
4.  **Make Your Changes:** Implement your changes, ensuring they align with the project's coding standards and architecture. See the [AI Agent Directives](#ai-agent-directives) in the README.
5.  **Commit Your Changes:** Commit your changes with clear and concise commit messages. Follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.
    bash
    git commit -m "feat: implemented new feature"
    
6.  **Push Your Changes:** Push your branch to your forked repository:
    bash
    git push origin feature/your-feature-name
    
7.  **Create a Pull Request:** Create a pull request from your branch to the `main` branch of the original repository.

## Development Guidelines

*   **Code Style:** Follow the project's code style, enforced by Biome for linting and formatting.  Ensure your code passes the linting checks.
*   **Testing:** Write unit tests using Vitest and E2E tests using Playwright. Ensure your tests pass before submitting a pull request.
*   **Documentation:** Update the documentation if you add new features or change existing ones. Ensure your changes are well-documented.
*   **Pull Request Template:** Use the pull request template provided (`.github/PULL_REQUEST_TEMPLATE.md`) to structure your pull request.
*   **Issue Template:** Use the issue templates provided (`.github/ISSUE_TEMPLATE/`) to report bugs, suggest features, or ask questions.

## Tech Stack and Tools

This project uses the following technologies:

*   **Frontend:** React, TypeScript, Vite, TailwindCSS, Tauri.
*   **Testing:** Vitest (Unit Tests), Playwright (E2E Tests).
*   **Linting/Formatting:** Biome.

## Getting Started

1.  **Install Node.js and npm:** Make sure you have Node.js (version 18 or higher) and npm (version 8 or higher) installed.
2.  **Install Dependencies:** Run `npm install` in the project root to install the necessary dependencies.
3.  **Run the Development Server:** Run `npm run dev` to start the development server.
4.  **Build the Application:** Run `npm run build` to build the application for production.
5.  **Run Tests:** Run `npm test` for unit tests and `npm run e2e` for end-to-end tests.

## Communication

*   For general questions and discussions, please use the issue tracker.
*   For security-related issues, please refer to the [Security Policy](.github/SECURITY.md).

Thank you again for contributing! Your help is greatly appreciated.
