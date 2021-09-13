import React from "react";
import { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Slider = ({
    images = []
}) => {
    const [currentImgIndex, setCurrentImgIndex] = useState(0)
    const currentImg = images[currentImgIndex]
    const prevImg = images[currentImgIndex -1]
    const nextImg = images[currentImgIndex +1]
    return (
        <div className="sliderContainer">
            {prevImg && (
                <div className="leftButton">
                    <FaArrowLeft/>
                </div>
            )}
            {currentImg && (
                <div className="currentImageContainer">
                    {currentImg.title && (
                        <div className="currentImage--title">
                            {currentImg.title}
                        </div>
                    )}
                    <img src={currentImg.src} alt={`${currentImg.title} silder background`}/>
                </div>
            )}
            {nextImg && (
                <div className="rightButton">
                    <FaArrowRight />
                </div>
            )}
        </div>
    )
}

export default Slider;