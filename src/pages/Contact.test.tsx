import { screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../test/utils';
import Contact from './Contact';

// Mock reCAPTCHA
jest.mock('react-google-recaptcha', () => {
    return {
        __esModule: true,
        default: () => <div data-testid="recaptcha">Recaptcha</div>,
    };
});

describe('Contact Page', () => {
    it('renders contact form', () => {
        renderWithProviders(<Contact />);

        expect(screen.getByRole('heading', { name: /Get in Touch/i })).toBeInTheDocument();
        expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/Message/i)).toBeInTheDocument();
        expect(screen.getByTestId('recaptcha')).toBeInTheDocument();
    });
});
