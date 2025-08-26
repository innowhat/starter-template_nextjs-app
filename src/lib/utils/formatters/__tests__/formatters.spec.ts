import { formatCompactNumber } from '../formatters';

describe('formatCompactNumber', () => {
    it('should format numbers in compact notation', () => {
        expect(formatCompactNumber(1000)).toBe('1K');
        expect(formatCompactNumber(1500)).toBe('1.5K');
        expect(formatCompactNumber(1000000)).toBe('1M');
        expect(formatCompactNumber(2500000)).toBe('2.5M');
        expect(formatCompactNumber(1000000000)).toBe('1B');
    });

    it('should handle zero and negative numbers', () => {
        expect(formatCompactNumber(0)).toBe('0');
        expect(formatCompactNumber(-1000)).toBe('-1K');
        expect(formatCompactNumber(-1500)).toBe('-1.5K');
    });
});
