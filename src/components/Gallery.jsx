import React, { useState } from "react";

import {ReactComponent as ArrowLeft} from '../images/chevronGauche.svg';
import {ReactComponent as ArrowRight} from '../images/chevronDroit.svg';

import { Picture } from "./Picture";

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
            
            <Picture url={pictures[currentIndex]} alt="Texte Default" />

            {lastIndexPictures > 1 && <ArrowLeft className="arrow-left" onClick={handlePreviousClick} />}
            {lastIndexPictures > 1 && <ArrowRight className="arrow-right" onClick={handleNextClick} />}
            <span className="picture-counter">{currentIndex + 1}/{lastIndexPictures + 1}</span>
        </section>
    )
}