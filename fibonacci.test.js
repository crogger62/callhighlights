const calculateFibonacci = require('./fibonacci');

describe('calculateFibonacci', () => {
    test('returns empty array for n <= 0', () => {
        expect(calculateFibonacci(0)).toEqual([]);
        expect(calculateFibonacci(-1)).toEqual([]);
        expect(calculateFibonacci(-10)).toEqual([]);
    });

    test('returns [0] for n === 1', () => {
        expect(calculateFibonacci(1)).toEqual([0]);
    });

    test('returns [0, 1] for n === 2', () => {
        expect(calculateFibonacci(2)).toEqual([0, 1]);
    });

    test('returns correct sequence for n === 3', () => {
        expect(calculateFibonacci(3)).toEqual([0, 1, 1]);
    });

    test('returns correct sequence for n === 5', () => {
        expect(calculateFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    });

    test('returns correct sequence for n === 10', () => {
        expect(calculateFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test('handles larger values correctly', () => {
        const result = calculateFibonacci(15);
        expect(result).toHaveLength(15);
        expect(result[0]).toBe(0);
        expect(result[1]).toBe(1);
        expect(result[14]).toBe(377);
        // Verify each number is sum of previous two
        for (let i = 2; i < result.length; i++) {
            expect(result[i]).toBe(result[i - 1] + result[i - 2]);
        }
    });
});

