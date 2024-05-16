import { useEffect, useState } from "react";

async function getData(id: string) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return data
}


function useAnimeDetail(id: string) {
    const [data, setData] = useState<any>({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getData(id)
            .then(data => {
                setData(data.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    return { data, error, loading };
}

export default useAnimeDetail;