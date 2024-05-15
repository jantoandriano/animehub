import React from "react";
import Link from "next/link"
import "./index.css"

type Props = {
    id: string | number;
    title: string;
    source: string;
    images: any;
}

const Card: React.FC<Props> = ({ id, title, source, images }) => {
    return (
        <div className="group">
            <Link href={`/anime/${id}`}>
                <div className="card-image-container">
                    <img src={images.jpg.image_url} alt={title} className="card-image" />

                </div>
                <div className="card-desc-container">
                    <div>
                        <h3 className="card-desc-title">
                            {title}
                        </h3>
                        <p className="card-desc-subtitle">{source}</p>
                    </div>
                </div>
            </Link>

        </div>
    )
}

export default Card