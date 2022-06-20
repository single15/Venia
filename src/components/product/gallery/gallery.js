import React, { useState } from "react";
import Media from "react-media";
import './gallery.scss';

const ImagesOption = ({ source, title, selected, handleClick }) => (
    <div className={`option ${selected ? 'selected' : ''}`} onClick={handleClick}>
        <img src={source} alt={title} width={60} />
    </div>
)

const Gallery = ({ source, title }) => {
    const [selectedImg, setImage] = useState(1);
    const [slideNumber, setSlideNumber] = useState(1);

    const prev = (num) => {
        setSlideNumber(num+1);
        slideShow(num+1);
    }

    const next = (num) => {
        if(num < 1) setSlideNumber(1);
        else setSlideNumber(num-1);
        slideShow(num+1);
    }

    const slideShow = () => {

    }


    return (
        <Media query={'(max-width: 1023px)'}>
            {
                matches => (
                    <>
                        {
                            matches ?
                                <figure className="gallery-section">
                                    <center>
                                        <img src={source} alt={title} width={300} />
                                    </center>
                                </figure>
                                :
                                <figure className="gallery-section">
                                    <div className="image-options">
                                        <ImagesOption source={source} title={title} selected={selectedImg === 1} handleClick={() => setImage(1)} />
                                        <ImagesOption source={source} title={title} selected={selectedImg === 2} handleClick={() => setImage(2)} />
                                        <ImagesOption source={source} title={title} selected={selectedImg === 3} handleClick={() => setImage(3)} />
                                        <ImagesOption source={source} title={title} selected={selectedImg === 4} handleClick={() => setImage(4)} />
                                        <ImagesOption source={source} title={title} selected={selectedImg === 5} handleClick={() => setImage(5)} />
                                    </div>
                                    <div>
                                        <center>
                                            <img src={source} alt={title} width={400} />
                                        </center>
                                    </div>
                                </figure>
                        }
                    </>
                )
            }

        </Media>
    )
}

export default Gallery;