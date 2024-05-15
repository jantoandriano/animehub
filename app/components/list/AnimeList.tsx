'use client'

import React from "react";
import List from "./List";
import useAnimeList from "@/app/repositories/useAnimeList";

type Props = {
    q: string;
    currentPage: string;
}

const AnimeList: React.FC<Props> = ({ q, currentPage }) => {
    const { data, error, loading } = useAnimeList(q, currentPage);

    if (!data.length && loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    

    return (
        <div>
            <List heading="Anime List" data={data || []} />
        </div>
    )
}

export default AnimeList