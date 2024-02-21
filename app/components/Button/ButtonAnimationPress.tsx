"use client";

import React from "react";

import { Buttonprops } from "@/app/contants/Buttonprops";
import "./style.css";

const ButtonAnimationPress: React.FC<Buttonprops> = (props: any) => {
  return (
    <>
      <button className="custom-btn btn-6" onClick={props?.onClick}>
        <span>{props?.text ? props?.text : "Click me!"}</span>
      </button>
    </>
  );
};

export default ButtonAnimationPress;
