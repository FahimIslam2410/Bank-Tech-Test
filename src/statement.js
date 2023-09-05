class Statement {
    constructor (transaction) {
        this.transaction = transaction;
    }

    print() {
        let statement = 'date || credit || debit || balance\n';

        let runningBalance = 0;

        this.transaction.forEach(transaction => {
            if (transaction.type === 'Deposit') {
                runningBalance += transaction.amount;
                statement += `${transaction.date} || || ${transaction.amount.toFixed(2)} || ${runningBalance.toFixed(2)}\n`;
            } else {
                runningBalance -= transaction.amount;
                statement += `${transaction.date} || ${transaction.amount.toFixed(2)} || || ${runningBalance.toFixed(2)}\n`;
            }
        });

        return statement.trim();
    }
}

module.exports = Statement;