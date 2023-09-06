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

I organized the components/classes into three classes: Account, Transaction, and Statement. I diagrammed these classes along with the methods they would have using Excalidraw.

I structured it this way because of three reasons:
* Easy to read
* Easy to test
* Modular





<img width="703" alt="Screenshot 2023-09-05 at 17 11 04" src="https://github.com/FahimIslam2410/Bank-Tech-Test/assets/120402745/83f01ab6-f174-4f99-b6fc-0f773b85b81f">






### I have also added a couple of ease of life things when use node repl:
* When depositing money it returns a simple deposit message in the terminal
* When withdrawing money it returns a simple withdrawal message in the terminal
* Instead of a user inputting a date it happens automatically


# Prerequisites/Environment Setup

I setup my environment with the following:

In the main directory (/BANK)
* npm install
* npm install --save-dev jest
* npm install --save-dev @babel/core @babel/preset-env
* npm install --save-dev eslint prettier


### To run the test suite use the following command:
* npx jest


### This is the program running in the node terminal

<img width="715" alt="Screenshot 2023-09-06 at 11 40 06" src="https://github.com/FahimIslam2410/Bank-Tech-Test/assets/120402745/e4bd03c0-0af4-4ec4-93a4-1088fb73717c">

