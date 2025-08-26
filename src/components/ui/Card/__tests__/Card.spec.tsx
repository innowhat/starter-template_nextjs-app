import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
    test('renders with default props', () => {
        render(<Card>Default Card</Card>);
        const card = screen.getByTestId('card');
        expect(card).toBeInTheDocument();
        expect(card.className).toMatch(/card/i);
        expect(card.className).toMatch(/default/i);
        expect(card).toHaveTextContent('Default Card');
        expect(card).toMatchSnapshot();
    });

    test('applies custom className', () => {
        render(<Card className="custom-class">Custom Class Card</Card>);
        const card = screen.getByTestId('card');
        expect(card).toHaveClass('custom-class');
    });

    test('has a data-testid attribute', () => {
        render(<Card dataTestid="test-card">Test Card</Card>);
        const card = screen.getByTestId('test-card');
        expect(card).toBeInTheDocument();
    });
});
