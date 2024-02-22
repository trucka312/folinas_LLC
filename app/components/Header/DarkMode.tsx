"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { BsMoonStars, BsSun } from "react-icons/bs";

interface DarkModeProps {
  align?: string;
}

const DarkMode = ({ align = "right" }: DarkModeProps) => {
  const { setTheme } = useTheme();
  const [pesentTheme, setPesentTheme] = React.useState("system");

  React.useEffect(() => {
    setTheme("system");
  }, []);

  return (
    <div className="">
      {pesentTheme === "light" ? (
        <BsMoonStars
          onClick={() => {
            setPesentTheme("dark"), setTheme("dark");
          }}
          className="h-[1.2rem] w-[1.2rem] "
        />
      ) : (
        <BsSun
          onClick={() => {
            setPesentTheme("light"), setTheme("light");
          }}
          className="h-[1.2rem] w-[1.2rem] "
        />
      )}
    </div>
  );
};

export default DarkMode;
