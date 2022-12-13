import { add, getStr } from "../src/quiz";

// test("total", () => {
//     expect(add(2, 3)).toBe(5);
// });

// test("testGetStr", () => {
//     expect(getStr(3)).toBe("1 2 3")
// })

// test("testGetStr", () => {
//     expect(getStr(6)).toBe("1 2 fizz 4 5 fizz")
// })

// test("testGetStr", () => {
//     expect(getStr(15)).toBe("1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz")
// })

test("testGetStr", () => {
    expect(getStr(30)).toBe("1 2 fizz 4 buzz fizz dizz 8 fizz buzz 11 fizz 13 dizz fizzbuzz 16 17 fizz 19 buzz fizzdizz 22 23 fizz buzz 26 fizz dizz 29 fizzbuzz")
})