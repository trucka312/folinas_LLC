"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CustomcatImg from "@/public/images/customcat.png";
import FacebookImg from "@/public/images/facebook.png";
import GrearLauchImg from "@/public/images/gearlaunch.png";
import GrearMentImg from "@/public/images/gearment.png";
import GoogleImg from "@/public/images/google.png";
import TeechipImg from "@/public/images/teechip.png";
import TiktokImg from "@/public/images/Tiktok.png";
import Image from "next/image";

const Partner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 4000,
    swipeToSlide: true,
  };
  return (
    <>
      <p className="text-4xl font-semibold text-center">OUR PARTNER</p>
      <div className="my-16 w-full mx-auto px-20 border-t-[1px] pt-10">
        <Slider {...settings}>
          <div>
            <Image src={CustomcatImg} alt="Logo" />
          </div>
          <div>
            <Image src={FacebookImg} alt="Logo" />
          </div>
          <div>
            <Image src={GrearLauchImg} alt="Logo" />
          </div>
          <div>
            <Image src={GrearMentImg} alt="Logo" />
          </div>
          <div>
            <Image src={GoogleImg} alt="Logo" />
          </div>
          <div>
            <Image src={TeechipImg} alt="Logo" />
          </div>
          <div>
            <Image src={TiktokImg} alt="Logo" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Partner;
