const Transaction = require('../src/transaction');

describe('Transaction', () => {
    test('should initialize properties correctly', () => {
        // Create a new transaction
        const transaction = new Transaction('Withdrawal',1000, '10-01-2023', 2000);

        // Verify the properties
        expect(transaction.type).toBe('Withdrawal');
        expect(transaction.amount).toBe(1000);
        expect(transaction.date).toBe('10-01-2023');
        expect(transaction.balance).toBe(2000);
    });
});
        