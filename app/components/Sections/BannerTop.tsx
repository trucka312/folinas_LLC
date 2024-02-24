'use client';
import Link from 'next/link';
import { FaAnglesRight } from "react-icons/fa6"
import {useTranslations} from 'next-intl';

import BannerImage from "@/public/images/banners/banner-top.jpg";
import Image from "next/image";
import Container from "../Commons/Container";
import Heading from "../Commons/Heading";

const BannerTop = () => {
    const t = useTranslations('Sections.BannerTop');
    return (
        <div className='relative overflow-hidden'>
            <div className="flex justify-center items-center overflow-hidden transition-all shadow-[0_20px_50px_0_rgba(1,89,167,.15)]">
                <video preload="auto" muted autoPlay={true} playsInline className="w-full h-full">
                    <source src="/videos/video_intro.mp4" type="video/mp4"/>
                </video>
            </div>
            {/* <Image
                src={BannerImage}
                alt="Logo"
                className='h-[350px] object-cover md:h-[initial] max-w-full] animate-bottomOut'
                width={3000}
                height={500}
                priority={false}
            /> */}
            {/* <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center z-[1] text-white'>
                <Container>
                    <Heading headingTag='h2' heading={t('title')} className='animate-backInDown !mb-0 md:!mb-5' />
                    <Link href='#' className='animate-fadeInRight'>{t('link')} <FaAnglesRight className='inline-block ml-1 text-[12px] animate-shakeNext' /></Link>
                </Container>
            </div> */}
        </div>
    )
}
 
export default BannerTop;
