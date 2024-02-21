'use client';
import Image from "next/image";
import Slider from "react-slick";

import Shopify from "@/public/images/partners/shopify.png"
import Google from "@/public/images/partners/google.png"
import TikTok from "@/public/images/partners/tiktok.png"
import Facebook from "@/public/images/partners/facebook.png"
import Gearment from "@/public/images/partners/gearment.png"
import Teechip from "@/public/images/partners/teechip.png"
import CustomCat from "@/public/images/partners/customcat.png"
import GearLaunch from "@/public/images/partners/gearlaunch.png"

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
                slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1
                }
            }
        ]
    };
    const sliderData = [
        {
            title: 'Shopify',
            image: Shopify,
        },
        {
            title: 'Google',
            image: Google,
        },
        {
            title: 'TikTok',
            image: TikTok,
        },
        {
            title: 'Facebook',
            image: Facebook,
        },
        {
            title: 'Gearment',
            image: Gearment,
        },
        {
            title: 'Teechip',
            image: Teechip,
        },
        {
            title: 'CustomCat',
            image: CustomCat,
        },
        {
            title: 'GearLaunch',
            image: GearLaunch,
        },
    ]    

    return (
        <div id="partner" className="my-20">
            <Container>
                <Slider {...settings}>
                    {sliderData.map((item, index) => (
                        <div key={index} className="">
                            <Image 
                                src={item.image}
                                alt={item.title}
                                className='mx-auto'
                                width={270}
                                height={80}
                                priority={false}
                            />
                        </div>
                    ))}
                </Slider>
            </Container>
        </div>
    )
}
 
export default Partners;