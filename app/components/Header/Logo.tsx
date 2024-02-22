"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

import LogoImage from "@/public/images/Logo.png";
import Link from "next/link";
import LoadingBgTheme from "../Loading/LoadingBgTheme/LoadingBgTheme";

const Logo = () => {
  const pathname = usePathname();
  const LogoImageRender = () => {
    return (
      <Link href="#">
        <div className="">
          <LoadingBgTheme />
          <Image
            src={LogoImage}
            alt="Logo"
            className="cursor-pointer max-h-[52px] w-auto mx-auto"
            width={1020}
            height={536}
            priority={false}
          />
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
