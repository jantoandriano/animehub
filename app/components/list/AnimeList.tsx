import React from "react";
import List from "./List";

type Props = {
    q: string;
    currentPage: string;
}

async function getData(q: string, currentPage: string) {    
    const params = `?limit=10&q=${q}&page=${currentPage}`
    const res = await fetch(`https://api.jikan.moe/v4/anime${params}`)
    const data = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return data
}


const AnimeList: React.FC<Props> = async ({ q, currentPage }) => {
    const data = await getData(q, currentPage)
    return (
        <div>
            <List heading="Anime List" data={data.data} />
        </div>
    )
}

export default AnimeList