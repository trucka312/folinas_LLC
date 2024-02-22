"use client";

import React from "react";
import Image from "next/image";

import "./style.css";
import LogoImage from "@/public/images/logo.png";

const LoadingBgTheme = () => {
  return (
      <div className="loading">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <div className="absolute mt-2 ml-[5px]">
          <Image
            src={LogoImage}
            alt="Logo"
            className="cursor-pointer max-h-[52px] w-auto"
            width={1020}
            height={536}
            priority={false}
          />
        </div>
      </div>
  );
};

export default LoadingBgTheme;
