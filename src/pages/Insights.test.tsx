import { screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../test/utils';
import Insights from './Insights';

describe('Insights Page', () => {
    it('renders blog list', () => {
        renderWithProviders(<Insights />);

        expect(screen.getByRole('heading', { name: /Insights/i })).toBeInTheDocument();
    });
});
