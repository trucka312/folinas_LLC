"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import "./style.css";
import LogoImage from "@/public/images/logo.png";

const AnimatedBgThemee = () => {
  return (
    <Link href="#" className="loading">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <Image
        src={LogoImage}
        alt="Logo"
        className="cursor-pointer max-h-[52px] w-auto absolute mt-2 ml-[5px]"
        width={1020}
        height={536}
        priority={false}
      />
    </Link>
  );
};

export default AnimatedBgThemee;