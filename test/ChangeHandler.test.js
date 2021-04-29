const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function () {
  test("class is defined", function () {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  test("amountDue is set based on an argument", function () {
    const changeHandler = new ChangeHandler(7.59);
    expect(changeHandler.amountDue).toBe(7.59);
  });

  test("cashTendered is set to zero", function () {
    const changeHandler = new ChangeHandler(7.59);
    expect(changeHandler.cashTendered).toBe(0);
  });

  test("Inserting a quarter adds 25", function () {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin('quarter');
    expect(changeHandler.cashTendered).toBe(.25);
  });

  test("Inserting a dime adds 10", function () {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin('dime');
    expect(changeHandler.cashTendered).toBe(.10);
  });

  test("Inserting a nickel adds 5", function () {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin('nickel');
    expect(changeHandler.cashTendered).toBe(.05);
  });

  test("Inserting a penny adds 1", function () {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin('penny');
    expect(changeHandler.cashTendered).toBe(.01);
  });

  test("Muliple function calls continues to add to cashTendered", function () {
    const changeHandler = new ChangeHandler();
    changeHandler.insertCoin('penny');
    changeHandler.insertCoin('nickel');
    changeHandler.insertCoin('quarter');
    expect(changeHandler.cashTendered).toBe(.31);
  });

  test("Returns true if cashTendered more than amountDue", function () {
    const changeHandler = new ChangeHandler(.59);
    changeHandler.insertCoin('quarter');
    changeHandler.insertCoin('quarter');
    changeHandler.insertCoin('nickel');
    changeHandler.insertCoin('nickel');
    changeHandler.isPaymentSufficient();
    expect(changeHandler.isPaymentSufficient).toBeTruthy();
  });

  test("Returns false if cashTendered less than amountDue", function () {
    const changeHandler = new ChangeHandler(.59);
    changeHandler.insertCoin('quarter');
    changeHandler.insertCoin('dime');
    changeHandler.isPaymentSufficient();
    expect(changeHandler.isPaymentSufficient).toBeFalsy();
  });

  test("Returns true if cashTendered equal to amountDue", function () {
    const changeHandler = new ChangeHandler(.59);
    changeHandler.insertCoin('quarter');
    changeHandler.insertCoin('quarter');
    changeHandler.insertCoin('nickel');
    changeHandler.insertCoin('penny');
    changeHandler.insertCoin('penny');
    changeHandler.insertCoin('penny');
    changeHandler.insertCoin('penny');
    changeHandler.isPaymentSufficient();
    expect(changeHandler.isPaymentSufficient).toBeTruthy();
  });

  test("32 change", function () {
    const changeHandler = new ChangeHandler(.59);
    changeHandler.insertCoin('quarter');
    changeHandler.insertCoin('penny');
    changeHandler.insertCoin('penny');
    changeHandler.giveChange();
    expect(changeHandler.giveChange).toBe("quarters: 1, dimes: 0, nickels: 1, pennies: 2");
  });

  test("10 change", function () {
    const changeHandler = new ChangeHandler(.59);
    changeHandler.insertCoin('quarter');
    changeHandler.insertCoin('penny');
    changeHandler.insertCoin('penny');
    changeHandler.giveChange();
    expect(changeHandler.giveChange).toBe("quarters: 0, dimes: 1, nickels: 0, pennies: 0");
  });

  test("27 change", function () {
    const changeHandler = new ChangeHandler(.59);
    changeHandler.insertCoin('quarter');
    changeHandler.insertCoin('penny');
    changeHandler.insertCoin('penny');
    changeHandler.giveChange();
    expect(changeHandler.giveChange).toBe("quarters: 1, dimes: 0, nickels: 0, pennies: 2");
  });
  test("68 change", function () {
    const changeHandler = new ChangeHandler(.59);
    changeHandler.insertCoin('quarter');
    changeHandler.insertCoin('penny');
    changeHandler.insertCoin('penny');
    changeHandler.giveChange();
    expect(changeHandler.giveChange).toBe("quarters: 2, dimes: 1, nickels: 1, pennies: 3");
  });
})
