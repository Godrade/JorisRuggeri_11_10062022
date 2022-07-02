import React, { useState } from "react";

import {ReactComponent as ChevronGauche} from '../images/chevronGauche.svg';
import {ReactComponent as ChevronDroit} from '../images/chevronDroit.svg';

export const Gallery = ({ pictures }) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    const lastIndexPictures = pictures.length -1

    const handlePreviousClick = () => {
        if (currentIndex === 0){
            setCurrentIndex(lastIndexPictures)
        } else {
            setCurrentIndex(currentIndex -1)
        }
    }

    const handleNextClick = () => {
        if (currentIndex === lastIndexPictures){
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex +1)
        }
    }

    return (
        <section className="gallery">
            
            <img src={pictures[currentIndex]} alt="" />

            <ChevronGauche className="arrow-left" onClick={handlePreviousClick} style={{display: lastIndexPictures > 1 ? '' : 'none' }} />
            <ChevronDroit  className="arrow-right" onClick={handleNextClick} style={{display: lastIndexPictures > 1 ? '' : 'none' }} />
            <span className="picture-counter">{currentIndex}/{lastIndexPictures}</span>
        </section>
    )
}