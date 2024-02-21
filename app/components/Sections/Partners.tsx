'use client';
import Image from "next/image";

import Shopify from "@/public/images/partners/shopify.png"
import Google from "@/public/images/partners/google.png"
import TikTok from "@/public/images/partners/tiktok.png"
import Facebook from "@/public/images/partners/facebook.png"
import Gearment from "@/public/images/partners/gearment.png"
import Teechip from "@/public/images/partners/teechip.png"
import CustomCat from "@/public/images/partners/customcat.png"
import GearLaunch from "@/public/images/partners/gearlaunch.png"

import Container from "../Commons/Container";
import SlickSlider from "../Commons/SlickSlider";

const Partners = () => {
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

    const sliderContent = sliderData.map((item, index) => (
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
    ))

    return (
        <div className="my-20">
            <Container>
                <SlickSlider content={sliderContent} slidesToScroll={1} slidesToShow={4} speed={6000} autoplaySpeed={0} infinite fade={false} className='w-full' />
            </Container>
        </div>
    )
}
 
export default Partners;