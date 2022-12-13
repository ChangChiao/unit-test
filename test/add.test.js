import { add, total, bankAccount } from "../src/test";

describe("calculator", () => {
  test("add 1 + 2", () => {
    expect(add(1, 2)).toBe(3);
  });
});

test("total", () => {
  expect(total([2, 3, 4])).not.toBe(10);
});

test("should get null", () => {
  const obj = null;
  expect(obj).toBeNull();
});

test("should get sum less than 20", () => {
  expect(add(6, 8)).toBeLessThan(15);
});

test("should get sum less or equal 50", () => {
  expect(add(20, 30)).toBeLessThanOrEqual(50);
});

//toBeFalsy
test("userName should be tom", () => {
  const userName = "tom";
  expect(userName === "tom").toBeTruthy();
});

//比較object是否相等要用toEqual
test("Balance equals 500", () => {
  expect(bankAccount.getBalance()).toEqual({ balance: 500 });
});

//Contain
test("apple should be in fruits", () => {
  const fruits = ["lemon", "guava", "apple", "banana"];
  expect(fruits).toContain('apple');
});


//toMatch
test('apple should include p', () => {
    expect("apple").toMatch(/p/i);
})