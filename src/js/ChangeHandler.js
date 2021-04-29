/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {

  constructor(amountDue) {
    this.amountDue = amountDue;
    this.cashTendered = 0;
  }

  /**
   * The customer inserts a coin, increasing the cashTendered.
   * @param {string} type either quarter, dime, nickel, or penny
   */
  insertCoin(type) {
    if (type === 'quarter') {
      this.cashTendered += 25;
    }
    if (type === 'dime') {
      this.cashTendered += 10;
    }
    if (type === 'nickel') {
      this.cashTendered += 5;
    }
    if (type === 'penny') {
      this.cashTendered += 1;
    }
  }
  /**
   * Returns true if enough coins have been inserted to at least meet the amountDue
   */
  isPaymentSufficient() {
    return (this.amountDue <= this.cashTendered);
  }

  giveChange() {
    let changeDue = this.cashTendered - this.amountDue;
    console.log(changeDue);
    let change = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    }

    while (changeDue > 0) {
      if (changeDue >= 25) {
        changeDue -= 25;
        change.quarters++;
      }
      else if (changeDue >= 10) {
        changeDue -= 10;
        change.dimes++;
      }
      else if (changeDue >= 5) {
        changeDue -= 5;
        change.nickels++;
      }
      else {
        changeDue -= 1;
        change.pennies++;

      }
    }
    console.log(change);
    return change;
  }
}
module.exports = ChangeHandler;