const { add, subtract, multiply, divide } = require('../public/script');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1,2)).toBe(3);
});

test('adds -5 + 4 to equal -1', () => {
    expect(add(-5,4)).toBe(-1);
});

test('adds 4.2 + 1.3 to equal 5.5', () => {
    expect(add(4.2,1.3)).toBe(5.5);
});

test('substract 2 - 1 to equal 1', () => {
    expect(subtract(2,1)).toBe(1);
});

test('substract 12 - 20 to equal 3', () => {
    expect(subtract(12,20)).toBe(-8);
});

test('substract 2.4 - 0.7 to equal 1.7', () => {
    expect(subtract(2.4,0.7)).toBe(1.7);
});

test('multiply 3 * 4 to equal 12', () => {
    expect(multiply(3,4)).toBe(12);
});

test('multiply -6 * 7 to equal -42', () => {
    expect(multiply(-6,7)).toBe(-42);
});

test('multiply 1.2 + 5.6 to equal 6.72', () => {
    expect(multiply(1.2,5.6)).toBe(6.72);
});

test('divide 12 / 6 to equal 2', () => {
    expect(divide(12,6)).toBe(2);
});

test('divide -20 / 5 to equal -4', () => {
    expect(divide(-20,5)).toBe(-4);
});

test('divide 12.4 / 3.7 to equal 3.35', () => {
    expect(divide(12.4,3.7)).toBe(3.3513513513513513);
});

test('divide by 0', () => {
    expect(divide(2,0)).toBe(Infinity);
});