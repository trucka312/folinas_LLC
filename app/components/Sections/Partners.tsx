"use client";
import Image from "next/image";

import Shopify from "@/public/images/partners/shopify.png";
import Google from "@/public/images/partners/google.png";
import TikTok from "@/public/images/partners/tiktok.png";
import Facebook from "@/public/images/partners/facebook.png";
import Gearment from "@/public/images/partners/Dearment.png";
import Teechip from "@/public/images/partners/teechip.png";
import CustomCat from "@/public/images/partners/customcat.png";
import GearLaunch from "@/public/images/partners/gearlaunch.png";
// import Esty from "@/public/images/partners/esty.png";
// import Ebay from "@/public/images/partners/ebay.png";
// import Flashship from "@/public/images/partners/flashship.png";

import Container from "../Commons/Container";

const Partners = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    infinite: true,
    speed: 6000,
    autoplaySpeed: 0,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderData = [
    {
      title: "Shopify",
      image: Shopify,
    },
    {
      title: "Google",
      image: Google,
    },
    {
      title: "TikTok",
      image: TikTok,
    },
    {
      title: "Facebook",
      image: Facebook,
    },
    {
      title: "Gearment",
      image: Gearment,
    },
    {
      title: "Teechip",
      image: Teechip,
    },
    {
      title: "CustomCat",
      image: CustomCat,
    },
    {
      title: "GearLaunch",
      image: GearLaunch,
    },
    // {
    //   title: "Esty",
    //   image: Esty,
    // },
    // {
    //   title: "Amazon",
    //   image: Amazon,
    // },
    // {
    //   title: "Ebay",
    //   image: Ebay,
    // },
    // {
    //   title: "Flashship",
    //   image: Flashship,
    // },
  ];

  return (
    <div id="partner" className="my-20">
      <Container>
        <div className="w-full overflow-hidden">
          <div className="w-[4000px] flex items-center gap-[100px] animate-scrollLeft">
            {sliderData.map((item, index) => (
              <div
                key={index}
                className="flex items-center w-[250px] justify-center"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  className="mx-auto max-w-[142px]"
                  width={142}
                  height={41}
                  priority={false}
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Partners;
