class Transaction {
  constructor(type, amount, date, balance) {
      if (typeof type === 'undefined' || typeof amount === 'undefined' || typeof date === 'undefined' || typeof balance === 'undefined') {
          throw new Error('All parameters (type, amount, date, balance) are required.');
      }

      this.type = type;
      this.amount = amount;
      this.date = date;
      this.balance = balance;
  }
}
  
  module.exports = Transaction;
  