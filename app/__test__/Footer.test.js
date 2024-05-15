import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import { createMockRouter } from '../testUtils/createMockRouter';
import Footer from "../components/footer/Footer"


// Mock Next.js Link component if needed
jest.mock('next/link', () => ({ children, href }) => (
    <a href={href}>{children}</a>
));

test('renders Footer component with correct links and icons', () => {
    render(
        <RouterContext.Provider value={createMockRouter({})}>
            <Footer />
        </RouterContext.Provider>
    );

    const navLinks = ['About', 'Team', 'Contact', 'Terms'];
    navLinks.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    // Test for social media links using their accessible names
    const socialMediaLabels = ['Facebook', 'Instagram', 'Twitter', 'GitHub', 'Dribbble'];
    socialMediaLabels.forEach((label) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    });
});

test('renders social media icons with correct accessibility labels', () => {
    render(
        <RouterContext.Provider value={createMockRouter({})}>
            <Footer />
        </RouterContext.Provider>
    );

    const socialMediaLabels = ['Facebook', 'Instagram', 'Twitter', 'GitHub', 'Dribbble'];
    socialMediaLabels.forEach((label) => {
        expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    });
});

test('renders copyright text', () => {
    render(
        <RouterContext.Provider value={createMockRouter({})}>
            <Footer />
        </RouterContext.Provider>
    );

    expect(screen.getByText('© 2024 AnimeHub, Inc. All rights reserved.')).toBeInTheDocument();
});