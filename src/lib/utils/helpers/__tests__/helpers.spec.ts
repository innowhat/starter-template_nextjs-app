import { randomItem } from '../helpers';

describe('randomItem', () => {
    it('should return a random item from the array', () => {
        const arr = [1, 2, 3, 4, 5];
        const item = randomItem(arr);
        expect(arr).toContain(item);
    });

    it('should return undefined for an empty array', () => {
        const arr: unknown[] = [];
        const item = randomItem(arr);
        expect(item).toBeUndefined();
    });

    it('should handle arrays with different types', () => {
        const arr = [1, 'two', { three: 3 }, [4]];
        const item = randomItem(arr);
        expect(arr).toContain(item);
    });
});
