'use client';
import * as React from "react";
import Image from "next/image";

import AboutImage from '@/public/images/about/about-5.jpg'
import AboutImage2 from '@/public/images/about/about-6.jpg'
import AboutImage3 from '@/public/images/about/about-7.jpg'
import AboutImage4 from '@/public/images/about/about-8.jpg'

const AboutGrowing = () => {
    const [justifyItem, setJustifyItem] = React.useState('start')
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

            <div className={`mt-3 grid gap-[16px] grid-cols-[repeat(3,1fr)] grid-rows-[repeat(1,1fr)] w-[1248px] mx-auto items-center justify-${justifyItem}`}>
                {aboutImageData.map((item, index) => {
                    let justifyPosition;
                    if (index % 3 === 0) {
                        justifyPosition = 'start';
                    } else if (index % 3 === 1) {
                        justifyPosition = 'center';
                    } else {
                        justifyPosition = 'end'
                    }
                    return (
                        <div key={index} 
                            className="w-[405px] h-[270px] transition-all hover:w-[600px] hover:origin-right overflow-hidden duration-500"
                            onMouseEnter={() => setJustifyItem(justifyPosition)}
                        >
                            <div className="relative rounded-md overflow-hidden after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-[rgba(0,0,0,0.3)]">
                                <Image src={item.image} alt={item.title} title={item.title} className="object-cover w-full"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
 
export default AboutGrowing;