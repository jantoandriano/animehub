import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import AnimeList from "../components/list/AnimeList"

jest.mock('../components/list/List', () => ({ heading, data }) => (
    <div>
        <h1>{heading}</h1>
        <ul>
            {data.map((item, index) => (
                <li key={index}>{item.title}</li>
            ))}
        </ul>
    </div>
));

global.fetch = jest.fn(() =>
    Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ data: [{ title: 'Anime 1' }, { title: 'Anime 2' }] }),
    })
);

test('renders AnimeList component with data', async () => {
    render(<AnimeList q="naruto" currentPage="1" />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText(/Anime List/i)).toBeInTheDocument());

    expect(screen.getByText(/Anime 1/i)).toBeInTheDocument();
});

test('renders error message on fetch failure', async () => {
    fetch.mockImplementationOnce(() =>
        Promise.resolve({
            ok: false,
            json: () => Promise.resolve({}),
        })
    );

    render(<AnimeList q="naruto" currentPage="1" />);

    await waitFor(() => expect(screen.getByText(/Failed to fetch data/i)).toBeInTheDocument());
});