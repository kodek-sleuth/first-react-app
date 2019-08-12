import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router';
import Navbar from '../components/Navbar';

describe('<Navbar />', () => {
    it('should render the navbar', () => {
        const navbar = create(
        <MemoryRouter>
            <Navbar />
        </MemoryRouter>)
        expect(navbar.toJSON()).toMatchSnapshot();
    });
});

