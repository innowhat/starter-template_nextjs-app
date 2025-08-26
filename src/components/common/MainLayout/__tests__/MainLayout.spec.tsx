import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import MainLayout from '../MainLayout';

describe('MainLayout', () => {
    test('renders the main layout with children', () => {
        render(
            <MainLayout>
                <div>Test Child</div>
            </MainLayout>,
        );

        const mainElement = screen.getByRole('main');
        expect(mainElement).toBeInTheDocument();
        expect(mainElement).toHaveTextContent('Test Child');
    });

    test('applies the correct styles to the main element', () => {
        render(
            <MainLayout>
                <div>Styled Child</div>
            </MainLayout>,
        );

        const mainElement = screen.getByRole('main');
        expect(mainElement).toHaveClass(/main/i); // Assuming 'main' is a class in MainLayout.module.css
    });
});
