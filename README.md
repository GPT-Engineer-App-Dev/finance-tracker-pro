# finance-tracker-pro

Create the following pages and components:

1. A Home page at route / with: 
- A heading "My Budget App"
- A navbar with links to "Transactions" and "Export"
- Show a "Total Balance" by summing all income transactions and subtracting all expenses. Format it as currency.
- A footer with a copyright notice

2. A Transactions page at route /transactions with:
- A table listing all transactions with columns for date, amount, type (income/expense), and category
- Buttons to add, edit, and delete each transaction
- Filters for type (income/expense), category, and date range
- Date range filter should have fields for start and end date

3. An Add Transaction page at route /transactions/add with:
- A form with fields for date (date picker), amount (number input), type (radio buttons for income/expense), category (dropdown with options like Groceries, Bills, Salary, etc)
- A submit button labeled "Add Transaction" that saves the new transaction and navigates back to the Transactions page

4. Shared layout with navbar and footer used on all pages

For now, use mock data for the transactions. Example:
[
  {
    "id": 1,
    "date": "2023-04-15",
    "amount": 100,
    "type": "income", 
    "category": "Salary"
  },
  {
    "id": 2, 
    "date": "2023-04-20",
    "amount": -50,
    "type": "expense",
    "category": "Groceries"  
  }
]

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with REPLACE_WITH_TECH_STACK_SUMMARY.

REPLACE_WITH_TECH_STACK_POINTS

## Setup

```sh
git clone https://github.com/GPT-Engineer-App-Dev/finance-tracker-pro.git
cd finance-tracker-pro
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
