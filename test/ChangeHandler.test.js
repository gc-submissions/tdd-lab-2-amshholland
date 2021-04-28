const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function () {
  test("class is defined", function () {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  test("amountDue is set based on an argument", function () {
    const changeHandler = new ChangeHandler(7.59);
    expect(changeHandler.amountDue).toBe(7.59);

  })
  test("cashTendered is set to zero", function () {
    const changeHandler = new ChangeHandler(7.59);
    expect(changeHandler.cashTendered).toBe(0);
  })


});