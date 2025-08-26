import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    test('renders the header with default text', () => {
        render(<Header />);

        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();
    });

    test('renders the header with custom children', () => {
        render(<Header>Custom Header Content</Header>);

        const headerElement = screen.getByRole('banner');
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveTextContent('Custom Header Content');
    });
});
