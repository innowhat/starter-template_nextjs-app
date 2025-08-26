import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navigation from '../Navigation';

describe('Navigation Component', () => {
    beforeEach(() => {
        render(<Navigation />);
    });

    test('renders the logo', () => {
        const logo = screen.getByText(/LOGO/i);
        expect(logo).toBeInTheDocument();
        expect(logo).toMatchSnapshot();
    });

    test('renders the Home link', () => {
        const homeLink = screen.getByRole('link', { name: /Home/i });
        expect(homeLink).toBeInTheDocument();
    });

    test('renders the About link', () => {
        const aboutLink = screen.getByRole('link', { name: /About/i });
        expect(aboutLink).toBeInTheDocument();
    });
});
