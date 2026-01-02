
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('debug getByText', () => {
    render(<div>Hello World</div>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
});
