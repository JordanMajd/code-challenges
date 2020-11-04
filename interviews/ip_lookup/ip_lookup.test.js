const lookup = require("./ip_lookup_solution.js");

test("can do a direct map", function() {
  expect(lookup("1.2.3.4")).toBe("CA");
});

test("can not match", function() {
  expect(lookup("4.1.1.1")).toBe("Unknown");
});

test("can match cidr", () => {
  expect(lookup("10.10.1.44")).toBe("FR");
});

test("can not match cidr", () => {
  expect(lookup("10.10.1.90")).toBe("Unknown");
});