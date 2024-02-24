"use client";
import LoadingBgTheme from "../Loading/LoadingBgTheme/LoadingBgTheme";

const Logo = ({ pathname }: { pathname: string[];}) => {
  return (
    <>
      {pathname.length === 0 ? <h1><LoadingBgTheme /></h1> : <LoadingBgTheme />}
    </>
  );
};

export default Logo;
