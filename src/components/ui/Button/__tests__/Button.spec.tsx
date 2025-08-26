import { describe, expect, test, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button', () => {
    test('renders with default props', () => {
        render(<Button>Click Me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass(/button/i);
        expect(button).toHaveClass(/md/i);

        expect(button).toMatchSnapshot();
    });

    test('applies variant and size classes', () => {
        render(
            <Button variant="secondary" size="lg">
                Click Me
            </Button>,
        );
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toHaveClass(/button/i);
        expect(button).toHaveClass(/secondary/i);
        expect(button).toHaveClass(/lg/i);
    });

    test('calls onClick handler when clicked', () => {
        const handleClick = vi.fn();
        render(<Button onClick={handleClick}>Click Me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test('is disabled when disabled prop is true', () => {
        render(<Button disabled>Click Me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeDisabled();
    });

    test('has a data-testid attribute', () => {
        render(<Button dataTestid="test-button">Click Me</Button>);
        const button = screen.getByTestId('test-button');
        expect(button).toBeInTheDocument();
    });
});
