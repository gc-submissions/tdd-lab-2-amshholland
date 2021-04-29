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
    if (this.amountDue > this.cashTendered) {
      return true;
    }
    return false;
  }

  giveChange() {
    // TODO return the correct change in the following format...
    return {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    }
  }
}

module.exports = ChangeHandler;