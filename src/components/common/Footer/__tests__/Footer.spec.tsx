import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer', () => {
    test('renders the footer with default text', () => {
        render(<Footer />);

        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
        expect(footerElement).toHaveTextContent('Footer section');
    });

    test('renders the footer with custom children', () => {
        render(<Footer>Custom Footer Content</Footer>);

        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toBeInTheDocument();
        expect(footerElement).toHaveTextContent('Custom Footer Content');
    });
});
