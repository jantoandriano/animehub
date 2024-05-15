import React from "react";
import Card from "../card/Card"
import "./index.css"
import Pagination from "../pagination/Pagination";

type Data = {
    mal_id: string;
    title: string;
    source: string;
    images: any;
}

type Props = {
    heading: string;
    data: Data[] | never[]
}

const List: React.FC<Props> = ({ heading, data }) => {   
  
    return (
        <section className="list-container">
            <div className="list-header">
                <h2 className="list-title">
                    {heading}
                </h2>
            </div>

            <div className="list-item-container">
                {data.map(val => (
                    <Card key={val.mal_id} id={val.mal_id} title={val.title} source={val.source} images={val.images} />
                ))}
            </div>
            <Pagination totalPages={10} />
        </section>
    )
}

export default List