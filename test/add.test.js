import { add } from "../test";

describe('calculator', () => {
    test('add 1 + 2' , () => {
        expect(add(1, 2)).toBe(3);
    })
});