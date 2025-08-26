import { describe, expect, test, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Input from '../Input';

describe('Input', () => {
    test('renders with default props', () => {
        render(<Input placeholder="Enter text" />);
        const input = screen.getByPlaceholderText('Enter text');
        expect(input).toBeInTheDocument();
        expect(input).toHaveClass(/md/i);
        expect(input).toMatchSnapshot();
    });

    test('applies success variant and size classes', () => {
        render(<Input variant="success" placeholder="Enter text" />);
        const input = screen.getByPlaceholderText('Enter text');
        expect(input).toHaveClass(/md/i);
        expect(input).toHaveClass(/success/i);
    });

    test('calls onChange handler when value changes', () => {
        const handleChange = vi.fn();
        render(<Input onChange={handleChange} placeholder="Enter text" />);
        const input = screen.getByPlaceholderText('Enter text');
        fireEvent.change(input, { target: { value: 'New Value' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    test('is disabled when disabled prop is true', () => {
        render(<Input disabled placeholder="Enter text" />);
        const input = screen.getByPlaceholderText('Enter text');
        expect(input).toBeDisabled();
    });

    test('has a data-testid attribute', () => {
        render(<Input dataTestid="test-input" placeholder="Enter text" />);
        const input = screen.getByTestId('test-input');
        expect(input).toBeInTheDocument();
    });
});
