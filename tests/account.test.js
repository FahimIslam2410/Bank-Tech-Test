const Account = require("../src/account");

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
    account.deposit(100, "05/09/2023");

    // Testing the properties
    expect(account.balance).toEqual(100);
  });

  test("Using deposit() with 100 adds a transaction object to this.transactions array", () => {
    // Create a new account
    const account = new Account();
    account.deposit(100, "05/09/2023");

    // Testing the properties
    expect(account.transactions).toEqual([
      {
        amount: 100,
        balance: 100,
        date: "05/09/2023",
        type: "Deposit",
      },
    ]);
  });

  test('Using deposit() with -10 returns "Deposit amount must be greater than 0"', () => {
    // Create a new account
    const account = new Account();
    try {
      account.deposit(-10, "05/09/2023");
    } catch (error) {
      // Testing the properties
      expect(error.message).toEqual("Deposit amount must be greater than 0");
      expect(account.transactions).toEqual([]);
    }
  });
});


describe("Account withdrawal method", () => {
  test("Balance starts at 200, and when withdrawal() with 100 is called, balance should be 100", () => {
    // Create a new account
    const account = new Account();
    account.deposit(200, "05/09/2023");
    account.withdrawal(100, "05/09/2023");

    // Testing the properties
    expect(account.balance).toEqual(100);
  });

  test("Balance starts at 200, and when withdrawal() with 100 is called, adds a transaction object to this.transactions array", () => {
    // Create a new account
    const account = new Account();
    account.deposit(200, "05/09/2023");
    account.withdrawal(100, "05/09/2023");

    // Testing the properties
    expect(account.transactions).toEqual([
      {
        amount: 200,
        balance: 200,
        date: "05/09/2023",
        type: "Deposit",
      },
      {
        amount: 100,
        balance: 100,
        date: "05/09/2023",
        type: "Withdrawal",
      },
    ]);
  });

  test('Using withdrawal() with -10 when this.balance is at 0 returns "Insufficient funds"', () => {
    // Create a new account
    const account = new Account();
    try {
      account.withdrawal(-10, "05/09/2023");
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
		account.deposit(100, "05/09/2023");
		
		// Testing the properties
		expect(account.printStatement()).toEqual(
			"date || credit || debit || balance\n" +
			"05/09/2023 || || 100.00 || 100.00"
		);

	});

		test("When given one deposit() and one withdrawal() it returns the transaction print in the correct format", () => {
			// Create a new account
			const account = new Account();
			account.deposit(100, "05/09/2023");
			account.withdrawal(50, "06/09/2023");
			
			// Testing the properties
			expect(account.printStatement()).toEqual(
				"date || credit || debit || balance\n" +
				"05/09/2023 || || 100.00 || 100.00\n" +
				"06/09/2023 || 50.00 || || 50.00"
			);
		
	});
	




});
