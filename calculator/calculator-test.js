
it("should calculate the monthly rate correctly", function () {
  const values = {
    amount:300000,
    years: 30,
    rate: 6.79,
  };
  expect(calculateMonthlyPayment(values)).toEqual('1953.78')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 250000,
    years: 30,
    rate: 8
  };
  expect(calculateMonthlyPayment(values)).toEqual('1834.41')
});

it("should handle terribly high interest rates", function() {
  const values = {
    amount: 1000,
    years: 40,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});
it("should handle 1 years", function() {
  const values = {
    amount: 1000,
    years: 1,
    rate: 99
  };
  expect(calculateMonthlyPayment(values)).toEqual('134.42');
});
