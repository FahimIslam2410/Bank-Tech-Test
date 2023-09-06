const Account = require("../src/account");
// Mocks date for the tests below
const today = new Date();
const formattedDate = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;



describe("Account setup", () => {
  test("Check if transactions initialize as empty", () => {
    // Create a new account
    const account = new Account();

    // Testing the properties
    expect(account.transactions).toEqual([]);
  });

  test("Check if balance initializes as 0", () => {
    // Create a new account
    const account = new Account();

    // Testing the properties
    expect(account.balance).toEqual(0);
  });
});


describe("Account deposit method", () => {
  test("Balance should be 100 when deposit() is called with 100", () => {
    // Create a new account
    const account = new Account();
    account.deposit(100);

    // Testing the properties
    expect(account.balance).toEqual(100);
  });

  test("Using deposit() with 100 adds a transaction object to this.transactions array", () => {
    // Create a new account
    const account = new Account();
    account.deposit(100);

    // Testing the properties
    expect(account.transactions).toEqual([
      {
        amount: 100,
        balance: 100,
        date: formattedDate,
        type: "Deposit",
      },
    ]);
  });

  test('Using deposit() with -10 returns "Deposit amount must be greater than 0"', () => {
    // Create a new account
    const account = new Account();
    try {
      account.deposit(-10);
    } catch (error) {
      // Testing the properties
      expect(error.message).toEqual("Deposit amount must be greater than 0");
      expect(account.transactions).toEqual([]);
    }
  });
});


describe("Account withdraw method", () => {
  test("Balance starts at 200, and when withdraw() with 100 is called, balance should be 100", () => {
    // Create a new account
    const account = new Account();
    account.deposit(200);
    account.withdraw(100);

    // Testing the properties
    expect(account.balance).toEqual(100);
  });

  test("Balance starts at 200, and when withdraw() with 100 is called, adds a transaction object to this.transactions array", () => {
    // Create a new account
    const account = new Account();
		account.deposit(200);
    account.withdraw(100);

    // Testing the properties
    expect(account.transactions).toEqual([
      {
        amount: 200,
        balance: 200,
        date: formattedDate,
        type: "Deposit",
      },
      {
        amount: 100,
        balance: 100,
        date: formattedDate,
        type: "Withdrawal",
      },
    ]);
  });

  test('Using withdraw() with -10 when this.balance is at 0 returns "Insufficient funds"', () => {
    // Create a new account
    const account = new Account();
    try {
      account.withdraw(-10);
    } catch (error) {
      // Testing the properties
      expect(error.message).toEqual("Insufficient funds");
      expect(account.transactions).toEqual([]);
    }
  });
});


describe("Account printStatment()", () => {
	test("When given one deposit() it returns the transaction print in the correct format", () => {
		// Create a new account
		const account = new Account();
		account.deposit(100);
		
		// Testing the properties
		expect(account.printStatement()).toEqual(
			"date || credit || debit || balance\n" +
			`${formattedDate} || || 100.00 || 100.00`
		);

	});

		test("When given one deposit() and one withdraw() it returns the transaction print in the correct format", () => {
			// Create a new account
			const account = new Account();
			account.deposit(200);
			account.withdraw(50);
			
			// Testing the properties
			expect(account.printStatement()).toEqual(
				"date || credit || debit || balance\n" +
				`${formattedDate} || || 200.00 || 200.00\n` +
				`${formattedDate} || 50.00 || || 150.00`
			);
		
	});
	




});
