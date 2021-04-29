/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {

  constructor(amountDue, cashTendered = 0) {
    this.amountDue = amountDue;
    this.cashTendered = cashTendered;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * @param {string} type either quarter, dime, nickel, or penny
   */
  insertCoin(type) {
    if (type === 'quarter') {
      this.cashTendered += .25;
    }
    if (type === 'dime') {
      this.cashTendered += .10;
    }
    if (type === 'nickel') {
      this.cashTendered += .05;
    }
    if (type === 'penny') {
      this.cashTendered += .01;
    }
  }
  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
    return (this.amountDue <= this.cashTendered);
  }

  giveChange() {
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;

    while (this.amountDue > 0) {
      if (this.amountDue >= .25) {
        this.amountDue += .25;
        quarters++;
      }
      else if (this.amountDue >= .10) {
        this.amountDue += .10;
        dimes++;
      }
      else if (this.amountDue >= .05) {
        this.amountDue += .05;
        nickels++;
      }
      else {
        this.amountDue += .01;
        pennies++;
      }
    }
    console.log(
      `amount due: ${this.amountDue},
cash tendered: ${this.cashTendered},
change due: ${this.cashTendered - this.amountDue},
quarters: ${quarters},
dimes: ${dimes},
nickels: ${nickels},
pennies: ${pennies} `
    );
    return `quarters: ${quarters}, dimes: ${dimes},nickels: ${nickels}, pennies: ${pennies}`;
  }
}
module.exports = ChangeHandler;