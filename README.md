# The Problem

As a user, I want to manage my bank account using a REPL ( Node.js) to perform deposits, withdrawals, and view transaction history. Data should be stored in memory, with no need for external storage.

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10/01/2023  
**And** a deposit of 2000 on 13/01/2023  
**And** a withdrawal of 500 on 14/01/2023  
**When** the client prints their bank statement  
**Then** the client would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

# Designing a solution

I broke down the issue in bullet points.
* Deposit
* Withdrawal
* Storing statements (date,amount.balance)
* Printing the statements
* Storing the statements
* Automatically creating a date ~~(This is an extra step if there is time)~~


I then organised the bullets into 3 components/classes. Account, Transaction and Statement class. Using excalidraw I diagramed out the
classes and what methods they would have.






![bankTechTestDiagram](https://github.com/FahimIslam2410/Bank-Tech-Test/assets/120402745/eede950a-cad1-4e88-9188-d3b32a4f8541)





### I have also added a couple of ease of life things when use node repl:
* When depositing money it returns a simple deposit message
* When withdrawing money it returns a simple withdrawal message
* Instead of a user inputting a date it happens automatically


# Prerequisites/Environment Setup

I setup my environment with the following:

In the main directory (/BANK)
* npm install
* npm install --save-dev jest
* npm install --save-dev @babel/core @babel/preset-env
* npm install --save-dev eslint prettier


To run the test suite use the following command:
* npx jest
