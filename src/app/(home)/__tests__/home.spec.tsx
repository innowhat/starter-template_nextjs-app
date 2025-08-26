import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('About page', () => {
    test('renders a heading', () => {
        render(<Home />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeDefined();
    });
});
