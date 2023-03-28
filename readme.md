# Data Daftar Perguruan Tinggi Indonesia

[![Test](https://github.com/zakiego/daftar-perguruan-tinggi-indonesia/actions/workflows/test.yml/badge.svg)](https://github.com/zakiego/daftar-perguruan-tinggi-indonesia/actions/workflows/test.yml)

[![Run](https://github.com/zakiego/daftar-perguruan-tinggi-indonesia/actions/workflows/run.yml/badge.svg)](https://github.com/zakiego/daftar-perguruan-tinggi-indonesia/actions/workflows/run.yml)

## Data

Data diambil dari [PDDIKTI](https://api-frontend.kemdikbud.go.id/loadpt), diperbarui setiap hari.

Format data yang tersedia:

- JSON ([`data.json`](/data/data.json))
- CSV ([`data.csv`](/data/data.csv))
- Excel ([`data.xlsx`](/data/data.xlsx))

## How To Use

1. Clone the repository

   ```bash
   git clone https://github.com/zakiego/daftar-perguruan-tinggi-indonesia.git
   ```

2. Install dependencies

   ```bash
   pnpm install
   ```

3. Run the project

   ```bash
   pnpm start
   ```

4. Run tests

   ```bash
   pnpm test
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
