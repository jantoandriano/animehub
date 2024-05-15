import { useEffect, useState } from "react";

async function getData(q: string, currentPage: string) {
    const params = `?limit=10&q=${q}&page=${currentPage}`
    const res = await fetch(`https://api.jikan.moe/v4/anime${params}`)
    const data = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return data
}

function useAnimeList(q: string, currentPage: string) {
    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getData(q, currentPage)
            .then(data => {
                setData(data.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [q, currentPage]);

    return { data, error, loading };
}

export default useAnimeList;