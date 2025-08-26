import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
    test('renders with title from siteData', () => {
        render(<Home />);
        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toBeInTheDocument();
        expect(title).toMatchSnapshot();
    });
});
