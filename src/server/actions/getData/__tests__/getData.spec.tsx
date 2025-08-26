import { describe, expect, test } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { getData } from '../getData';

describe('getData', () => {
    test('should return data with a message and timestamp', async () => {
        const { result } = renderHook(() => getData());

        await act(async () => {
            const data = await result.current;
            expect(data).toHaveProperty('message');
            expect(data).toHaveProperty('timestamp');
            expect(typeof data.message).toBe('string');
            expect(typeof data.timestamp).toBe('string');
        });
    });
});
