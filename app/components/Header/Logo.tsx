"use client";
import AnimatedLogo from "@/app/components/AnimationCpn/AnimatedBgTheme/AnimatedBgThemee";

const Logo = ({ pathname }: { pathname: string[];}) => {
  return (
    <>
      {pathname.length === 0 ? <h1><AnimatedLogo /></h1> : <AnimatedLogo />}
    </>
  );
};

export default Logo;
