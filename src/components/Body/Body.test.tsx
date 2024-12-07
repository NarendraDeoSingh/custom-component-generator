import React from 'react';
import { render, screen } from '@testing-library/react';
import Body from './Body';

describe('Body', () => {
    it('should render correctly', () => {
        render(<Body />);
        expect(screen.getByText('Body Component')).toBeInTheDocument();
    });
});
