import React from "react";
import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

async function getData(id: string) {
    const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
    const data = await res.json();

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return data
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


const AnimeDetail = async ({ params }: { params: { id: string } }) => {
    const { data } = await getData(params.id);

    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[520px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                            <img className="w-full h-full rounded-md object-fit" src={data?.images?.jpg?.image_url} alt={data?.title} />
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data.title}</h2>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                            {data.background}
                        </p>
                        <div className="flex mb-4 text-sm">
                            <div className="mr-4 bg-blue-500 p-2 rounded-md">
                                <span className=" text-white dark:text-gray-300">{data.source}</span>
                            </div>
                            <div className="mr-4 bg-blue-500 p-2 rounded-md">
                                <span className=" text-white dark:text-gray-300">{data.episodes}</span>
                            </div>
                            <div className="mr-4 bg-blue-500 p-2 rounded-md">
                                <span className=" text-white dark:text-gray-300">{data.status}</span>
                            </div>
                        </div>

                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Synopsis:</span>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                {data?.synopsis}
                            </p>
                        </div>
                        <div className="flex -mx-2 mb-4 justify-end">
                            <div className="flex justify-center items-center gap-4 px-2 bg-white text-black py-2 rounded-full font-bold border border-black cursor-pointer hover:shadow-lg hover:border-none">
                                <a href={data.trailer.url} target="_blank" rel="noopener noreferrer">Trailer</a>
                                <img src="/icon-play.png" alt="icon-play" className="w-4 h-4 bg-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AnimeDetail