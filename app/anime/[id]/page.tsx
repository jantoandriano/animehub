import React from "react";
import type { Metadata, ResolvingMetadata } from 'next'
import Anime from "@/app/components/detail/Anime";

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {

    // read route params
    const id = params.id

    // fetch data
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json();

    return {
        title: data.data.title,
        description: data.data.synopsis,
        keywords: data.data.title_synonyms,
        metadataBase: data.data.url
    }
}


const AnimeDetail = ({ params }: { params: { id: string } }) => {    

    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <Anime id={params.id} />
        </div>

    )
}

export default AnimeDetail