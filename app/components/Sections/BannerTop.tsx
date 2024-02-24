"use client";
import Link from "next/link";
import { FaAnglesRight } from "react-icons/fa6";
import { useTranslations } from "next-intl";

import BannerImage from "@/public/images/banners/banner-top.jpg";
import Image from "next/image";
import Container from "../Commons/Container";
import Heading from "../Commons/Heading";

const BannerTop = () => {
  const t = useTranslations("Sections.BannerTop");
  return (
    <div className="relative after:bg-[rgba(0,_0,_0,_.2)] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 overflow-hidden">
      <Image
        src={BannerImage}
        alt="Logo"
        className="h-[350px] object-cover md:h-[initial] max-w-full] animate-bottomOut"
        width={3000}
        height={500}
        priority={false}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center z-[1] text-white">
        <Container>
          <Heading
            headingTag="h2"
            heading={t("title")}
            className="animate-backInDown !mb-0 md:!mb-5"
          />
          <Link href="#" className="animate-fadeInRight">
            {t("link")}{" "}
            <FaAnglesRight className="inline-block ml-1 text-[12px] animate-shakeNext" />
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default BannerTop;
