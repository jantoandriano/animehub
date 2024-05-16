# Anime Hub App

Welcome to the Anime Web App! This web application allows users to browse and search for anime movies. It features a home page with a list of anime, a detailed page for each anime, and a search bar to find specific anime movies.

## Features

- **Home Page:** Displays a list of popular anime movies.
- **Detail Page:** Provides detailed information about a selected anime movie.
- **Search Functionality:** Allows users to search for anime movies by title.

## Technologies Used

- **Next.js:** A React framework for server-rendered or statically-exported React applications. We are using the new app router from Next.js for the architecture.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom user interfaces.
- **TypeScript:** A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- **ESLint:** A static code analysis tool for identifying and fixing problems in JavaScript code.
- **Jest:** A delightful JavaScript testing framework with a focus on simplicity.

## Installation

To get started with the Anime Web App, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/anime-web-app.git
    cd anime-web-app
    ```

2. Install dependencies:
    ```bash
    pnpm install
    ```

3. Start the development server:
    ```bash
    pnpm dev
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the app in action.

## Project Structure

The project structure is organized as follows:
├── public/ # Public assets
├── app/ # New app router files
│ ├── anime/
│     └──[id]/ # Anime detail page
│ ├── components/ # React components
│ ├── __tests__/ # Jest test files
│ ├── types/ # TypeScript types
│ ├── repositories/ # Fetch data functions
│ ├── utils/ # TypeScript types
│ ├── testUtils/ # Utils testing
├── .eslintrc.js # ESLint configuration
├── jest.config.js # Jest configuration
├── next.config.js # Next.js configuration
├── package.json # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json # TypeScript configuration

## Running Tests

To run the tests, use the following command:

```bash
npm run test