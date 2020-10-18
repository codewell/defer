const defer = require("../lib/dev");

const foo = (a, b, c) => a + b + c;

test("Executed defer has the correct output", () => {
  expect(defer(foo, 1, 2, 3)()).toBe(6);
});
