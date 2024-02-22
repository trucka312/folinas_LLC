"use client";
import Image from "next/image";
import Link from "next/link";

import LogoImage from "@/public/images/logo.png";

import Social from "../Commons/Social";

const FooterLogo = () => {
  return (
    <div>
      <Image
        src={LogoImage}
        alt="Logo"
        className="max-h-[52px] w-auto"
        width={1020}
        height={536}
        priority={false}
      />
      <div className="mt-5">
        <p className="mb-5">If you have any question, please contact us at:</p>
        <Link
          title="Hotline"
          href={`tel: 096 446 3304`}
          className="text-[35px] font-semibold text-[rgba(var(--second-rgb))]"
        >
          (+84) 096 446 3304
        </Link>
      </div>
      <Social />
    </div>
  );
};

export default FooterLogo;
