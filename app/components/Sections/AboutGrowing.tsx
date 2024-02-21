'use client';
import Image from "next/image";

import AboutImage from '@/public/images/about/about-5.jpg'
import AboutImage2 from '@/public/images/about/about-6.jpg'
import AboutImage3 from '@/public/images/about/about-7.jpg'
import AboutImage4 from '@/public/images/about/about-8.jpg'

const AboutGrowing = () => {
    const aboutImageData = [
        {
            image: AboutImage2,
            title: 'The end year 2024'
        },
        {
            image: AboutImage3,
            title: 'The end year 2024'
        },
        {
            image: AboutImage4,
            title: 'The end year 2024'
        },
    ]
    return (
        <div className="my-20">
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-[50%] lg:pr-12 mb-[30px] lg:mb-0">
                    <h4 className="mt-0 lg:mt-6 text-[rgb(var(--second-rgb))] text-4xl lg:text-7xl ">
                        <span className="text-[rgb(var(--foreground-rgb))]">Growing</span> Day by Day,
                    </h4>
                    <h5 className="mt-0 lg:mt-6 text-[rgb(var(--second-rgb))] text-4xl lg:text-7xl">
                        <span className="text-[rgb(var(--foreground-rgb))]">Advancing</span> Step by
                        Step.
                    </h5>
                </div>
                <div className="w-full md:w-[50%] px-[15px]">
                    <div className="rounded-md overflow-hidden"><Image src={AboutImage} alt="About Growing" /></div>
                </div>
            </div>

            <div className="flex flex-wrap">
                {aboutImageData.map((item, index) => (
                    <div key={index} className="p-2 w-full md:w-[50%] lg:w-[calc(100%/3)]">
                        <div className="rounded-md overflow-hidden"><Image src={item.image} alt={item.title} title={item.title} /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}
 
export default AboutGrowing;