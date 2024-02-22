"use client";

import React from "react";

import { Buttonprops } from "@/app/contants";
import "./style.css";

const ButtonAnimationScroll: React.FC<Buttonprops> = (props: any) => {
  return (
    <>
      <button className="custom-btn btn-16 " onClick={props?.onClick}>
        <span>{props?.text ? props?.text : "Click me!"}</span>
      </button>
    </>
  );
};

export default ButtonAnimationScroll;
