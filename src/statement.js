class Statement {
    constructor (transaction) {
        this.transaction = transaction;
    }

    print() {
        let statement = 'date || credit || debit || balance\n';

        this.transaction.forEach(transaction => {
            if (transaction.type === 'Deposit') {
                statement += `${transaction.date} || || ${transaction.amount.toFixed(2)} || ${transaction.balance.toFixed(2)}\n`;
            } else {
                statement += `${transaction.date} || ${transaction.amount.toFixed(2)} || || ${transaction.balance.toFixed(2)}\n`;
            }
        });

        return statement.trim();
    }
}

module.exports = Statement;