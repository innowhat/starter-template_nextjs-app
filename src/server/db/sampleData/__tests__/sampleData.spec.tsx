import { describe, expect, test } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { getSampleData } from '../sampleData';

describe('getSampleData', () => {
    test('should return an array of sample data items', async () => {
        const { result } = renderHook(() => getSampleData());

        await act(async () => {
            const data = await result.current;
            expect(data).toBeInstanceOf(Array);
            expect(data.length).toBeGreaterThan(0);
            data.forEach(item => {
                expect(item).toHaveProperty('id');
                expect(item).toHaveProperty('name');
                expect(item).toHaveProperty('description');
                expect(typeof item.id).toBe('number');
                expect(typeof item.name).toBe('string');
                expect(typeof item.description).toBe('string');
            });
        });
    });
});
