import { add } from "../src/quiz";

test("total", () => {
    expect(add(2, 3)).toBe(5);
});