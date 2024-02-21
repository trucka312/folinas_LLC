'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcNext, FcPrevious } from "react-icons/fc";

interface SliderResponsive {
    breakpoint: number;
    settings: SliderProps
}

interface SliderProps {
    arrows?: boolean;
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    autoplaySpeed?: number;
    slidesToShow: number;
    slidesToScroll: number;
    fade?: boolean;
    centerMode?: boolean;
    responsive?: SliderResponsive[];
    className?: string;
    content: React.ReactNode[];
    nextArrow?: React.JSX.Element;
    prevArrow?: React.JSX.Element;
    autoplay?: boolean;
}

const SlickSlider = ({
    content, 
    className, 
    arrows, 
    dots, 
    infinite, 
    speed,
    autoplaySpeed,
    slidesToScroll, 
    slidesToShow, 
    fade = false,
    nextArrow = <FcNext/>,
    prevArrow = <FcPrevious/>,
    autoplay= true
}: SliderProps) => {
    const settings = { arrows, dots, infinite, speed, autoplaySpeed, slidesToScroll, slidesToShow, fade, autoplay }
    
    return (
        <>
            <Slider className={className&&className} {...settings} nextArrow={nextArrow} prevArrow={prevArrow}>
                {content?.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </Slider>
        </>
    )
}
 
export default SlickSlider;