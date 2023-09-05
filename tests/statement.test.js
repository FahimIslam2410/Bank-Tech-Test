const Statement = require('../src/statement');

const mockTransactionArray = [
    {
        amount: 200,
        balance: 200,
        date: '05/09/2023',
        type: 'Deposit',
    },
    {
        amount: 100,
        balance: 100,
        date: '05/09/2023',
        type: 'Withdrawal',
    },
]

describe('Statement', () => {
    test('Given a mock transaction array it should return a correctly formatted statement', () => {
        // Create a new statement
        const statement = new Statement(mockTransactionArray);
       
        // Testing the properties
        expect(statement.print()).toEqual(
            'date || credit || debit || balance\n' +
            '05/09/2023 || || 200.00 || 200.00\n' +
            '05/09/2023 || 100.00 || || 100.00'
        );
    });

});