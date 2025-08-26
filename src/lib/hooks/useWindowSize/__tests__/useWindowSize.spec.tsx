import { expect, test, describe, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';

import useWindowSize from '../useWindowSize';

describe('useWindowSize', () => {
    test('should update width and height on window resize', () => {
        const { result } = renderHook(() => useWindowSize());

        act(() => {
            // Simulate a resize event
            window.innerWidth = 800;
            window.innerHeight = 600;
            window.dispatchEvent(new Event('resize'));
        });

        expect(result.current.width).toBe(800);
        expect(result.current.height).toBe(600);
    });

    test('should clean up event listener on unmount', () => {
        const { unmount } = renderHook(() => useWindowSize());

        const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

        unmount();

        expect(removeEventListenerSpy).toHaveBeenCalledWith(
            'resize',
            expect.any(Function),
        );
    });
});
