'use client'

import React from "react";
import List from "./List";
import useAnimeList from "@/app/repositories/useAnimeList";
import CardSkeleton from "../skeleton/CardSkeleton";

type Props = {
    q: string;
    currentPage: string;
}

const AnimeList: React.FC<Props> = ({ q, currentPage }) => {
    const { data, loading } = useAnimeList(q, currentPage);

    if (loading) {
        return (
            <div className="flex flex-wrap gap-7 py-8 justify-center items-center lg:flex bg-white max-w-screen-xl lg:px-4 lg:py-8 lg:mx-auto lg:flex-wrap" >
                {
                    Array.from(Array(10).keys()).map(val => (
                        <CardSkeleton key={val} />
                    ))
                }
            </div>
        )
    }

    return (
        <div>
            <List heading="Anime List" data={data} />
        </div>
    )
}

export default AnimeList