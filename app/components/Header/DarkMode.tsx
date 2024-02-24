"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { BsMoonStars, BsSun } from "react-icons/bs";

const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div className="inline-block align-middle">
      <button
        className="relative border-[1px] p-2 rounded-md overflow-hidden bg-clip-text -webkitTextFillColor-transparent"
        onClick={() => handleChangeTheme()}
      >
        {theme === "light" ? <BsMoonStars size={18} /> : <BsSun size={18} />}
      </button>
    </div>
  );
};

export default DarkMode;
