import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import '../../styles/GeneralComponents/slider.scss';

const Slider = ({
    images = []
}) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0)
    const currentImg = images[currentImgIndex]
    const prevImg = images[currentImgIndex -1]
    const nextImg = images[currentImgIndex +1]
    return (
        <div className="slider__container">
            {prevImg && (
                <div className="slider__leftButton">
                    <FaArrowLeft/>
                </div>
            )}
            {currentImg && (
                <div className="slider__currentImage--container">
                    {currentImg.title && (
                        <div className="slider__currentImage--title">
                            {currentImg.title}
                        </div>
                    )}
                    <img 
                        className='slider__currentImage--img' 
                        src={currentImg.src} 
                        alt={`${currentImg.title} silder background`}
                    />
                </div>
            )}
            {nextImg && (
                <div className="slider__rightButton">
                    <FaArrowRight />
                </div>
            )}
        </div>
    )
}

export default Slider;