"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Link from "next/link";
import AnimatedLogo from "../AnimationCpn/AnimatedBgTheme/AnimatedBgThemee";

const Logo = () => {
  const pathname = usePathname();
  const LogoImageRender = () => {
    return (
      <Link href="#">
        <div className="ml-[20px]">
          <AnimatedLogo />
        </div>
      </Link>
    );
  };

  return (
    <>
      {pathname === "/" && (
        <h1>
          <LogoImageRender />{" "}
        </h1>
      )}
      {pathname !== "/" && <LogoImageRender />}
    </>
  );
};

export default Logo;
