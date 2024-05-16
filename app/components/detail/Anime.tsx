'use client'

import useAnimeDetail from "@/app/repositories/useAnimeDetail";
import React from "react"

type Props = {
    id: string;
}

const Anime: React.FC<Props> = ({ id }) => {
    const { data } = useAnimeDetail(id)    

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                    <div className="h-[520px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img className="w-full h-full rounded-md object-fit" src={data?.images?.jpg?.image_url} alt={data.title} />
                    </div>
                </div>
                <div className="md:flex-1 px-4">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{data.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 text-justify">
                        {data.background}
                    </p>
                    <div className="flex mb-4 text-sm">
                        <div className="mr-4 bg-blue-500 p-2 rounded-md">
                            <span className=" text-white dark:text-gray-300">{data.ource}</span>
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
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 text-justify">
                            {data.synopsis}
                        </p>
                    </div>
                    <div className="flex mt-4 lg:justify-start sm:justify-center sm:items-center">
                        <div className="flex justify-center items-center gap-4 px-2 bg-white text-black py-2 rounded-full font-bold border border-black cursor-pointer hover:shadow-lg hover:border-none">
                            <a href={data.trailer} target="_blank" rel="noopener noreferrer">Trailer</a>
                            <img src="/icon-play.png" alt="icon-play" className="w-4 h-4 bg-white" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Anime