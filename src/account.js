const Transaction = require('./transaction')


class Account {
    constructor () {
        this.balance = 0
        this.transactions = []
    }

    deposit = (amount, date) => {
        if (amount >= 0) {
            this.balance += amount;
            const transaction = new Transaction('Deposit', amount, date, this.balance)
            this.transactions.push(transaction)
        } else {
            throw new Error('Deposit amount must be greater than 0')
        }
    }

    withdrawal = (amount, date) => {
        if (this.balance >= amount) {
            this.balance -= amount;
            const transaction = new Transaction('Withdrawal', amount, date, this.balance)
            this.transactions.push(transaction)
        } else {
            throw new Error('Insufficient funds');
        }
    }
}
  
module.exports = Account;
