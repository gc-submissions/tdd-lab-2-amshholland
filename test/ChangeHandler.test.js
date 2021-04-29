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
})
