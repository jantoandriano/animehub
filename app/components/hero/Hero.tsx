import SearchInput from "../searchbar/SearchInput"
import "./index.css"

const Hero = async () => {

    return (
        <div className="hero-container">
            <div className="hero-header">
                <div className="hero-header-content">
                    <h1 className="hero-title"><span className="hero-title-span">Your Ultimate</span> Anime Hub.</h1>
                    <p className="hero-subtitle">Explore a Universe of Stories, Characters, and Epic Adventures</p>
                    <SearchInput />
                </div>
                <div className="hero-image">
                    <img src="/hero-image.png" alt="hero-image" />
                </div>
            </div>
        </div>
    )
}

export default Hero