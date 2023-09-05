# The Issue

* You should be able to interact with your code via a REPL like IRB or Node.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10/01/2023  
**And** a deposit of 2000 on 13/01/2023  
**And** a withdrawal of 500 on 14/01/2023  
**When** she prints her bank statement  
**Then** she would see

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
* Automatically creating a date (This was originally an extra step if there is time)

I then organised the bullets into 3 components/classes. Account, Transaction and Statement class. Using excalidraw I diagramed out the
classes and what methods they would have.

****** ENTER PIC OF DIAGRAM ******


# Prerequisites/Environment Setup

I setup my environment with the following:

In the main directory (/BANK)
* npm install
* npm install --save-dev jest
* npm install --save-dev @babel/core @babel/preset-env
* npm install --save-dev eslint prettier


To run the test suite use the following command:
* npx jest
