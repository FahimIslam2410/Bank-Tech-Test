const Transaction = require('../src/transaction');

describe('Transaction', () => {
    test('Given correct parameters should initialize class correctly', () => {
        // Create a new transaction
        const transaction = new Transaction('Withdrawal',1000, '10-01-2023', 2000);

        //Testing the properties
        expect(transaction.type).toBe('Withdrawal');
        expect(transaction.amount).toBe(1000);
        expect(transaction.date).toBe('10-01-2023');
        expect(transaction.balance).toBe(2000);
    });

    test('given empty parameters should return error message', () => {
        // Create a new transaction
        try {
            const transaction = new Transaction('','' , '10-01-','');
        } catch (error) {
            //Testing the properties
            expect(error.message).toEqual('All parameters (type, amount, date, balance) are required.')
        }
    
    });
});
        