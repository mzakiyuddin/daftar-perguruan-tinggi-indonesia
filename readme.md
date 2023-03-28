# TypeScript Boilerplate with Vitest Setup ⚡

[![Test](https://github.com/meratusdev/typescript-node-starter/actions/workflows/test.yml/badge.svg)](https://github.com/meratusdev/typescript-node-starter/actions/workflows/test.yml)

Quickly start building your TypeScript-based application with this preconfigured starter project that includes test setup.

## How To Use

1. Clone the repository

   ```bash
   git clone https://github.com/meratusdev/typescript-node-starter.git
   ```

2. Install dependencies

   ```bash
   yarn install
   ```

3. Run the project

   ```bash
   yarn start
   ```

4. Run tests

   ```bash
   yarn test
   ```

## Folder Structure

```bash
├── index.ts # Entry point
├── utils # Utils folder
│   ├── [utils].ts
│   └── __tests__
│       └── [utils].test.ts
├── .github
│   └── workflows
│       └── test.yml # Github Actions for testing
├── .vscode
│   └── settings.json # VSCode settings
├── .gitignore # Git ignore
├── vitest.config.js # Vitest config
├── package.json # Package.json
├── README.md # Readme
└── tsconfig.json # TypeScript config
```
