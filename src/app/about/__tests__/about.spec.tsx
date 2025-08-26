import { render, screen } from '@testing-library/react';
import About from '../page';

describe('About page', () => {
    it('renders a heading', () => {
        render(<About />);

        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('About Us');
    });
});
