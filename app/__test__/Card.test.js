import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from '../components/card/Card';
import {  RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime'
import { createMockRouter } from '../testUtils/createMockRouter';

// Mock Next.js Link component if needed
jest.mock('next/link', () => ({ children, href }) => (
    <a href={href}>{children}</a>
));

test('renders Card component with correct props', () => {
    const id = 1;
    const title = 'Anime Title';
    const source = 'Source Name';
    const images = {
        jpg: {
            image_url: 'http://example.com/image.jpg'
        }
    };

    render(
        <RouterContext.Provider value={createMockRouter({})}>
            <Card id={id} title={title} source={source} images={images} />
        </RouterContext.Provider>
    );

    expect(screen.getByRole('img', { name: title })).toHaveAttribute('src', images.jpg.image_url);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(source)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', `/anime/${id}`);
});