const Transaction = require('./transaction')
const Statement = require('./statement')
const getDate = require('./date')



class Account {
    constructor () {
        this.balance = 0
        this.transactions = []
    }

    deposit(amount) {
        const date = getDate()
        if (amount > 0) {
            this.balance += amount;
            const transaction = new Transaction('Deposit', amount, date, this.balance)
            this.transactions.push(transaction)
            return (`£${transaction.amount} deposited`)
        } else {
            throw new Error('Deposit amount must be greater than 0')
        }
    }

    withdraw(amount) {
        const date = getDate()
        if (this.balance >= amount) {
            this.balance -= amount;
            const transaction = new Transaction('Withdrawal', amount, date, this.balance)
            this.transactions.push(transaction)
            return (`£${transaction.amount} withdrawn`)
        } else {
            throw new Error('Insufficient funds');
        }
    }

    printStatement() { 
        const statement = new Statement(this.transactions)
        return statement.print();
    }


}
  
module.exports = Account;
