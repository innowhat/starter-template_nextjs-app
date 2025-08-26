import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import AboutView from '../AboutView';

describe('AboutView', () => {
    test('renders with title from siteData', () => {
        render(<AboutView />);
        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toBeInTheDocument();
        expect(title).toMatchSnapshot();
    });
});
