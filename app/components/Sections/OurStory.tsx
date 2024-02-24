'use client';
import Image from "next/image";
import Slider from "react-slick";

import ImageOurStory from "@/public/images/about/about-1.jpg"
import ImageOurStory2 from "@/public/images/about/about-2.jpg"

import Container from "../Commons/Container";
import Heading from "../Commons/Heading";
import AboutUs from "./AboutUs";

const OurStory = () => {
    const settings = {
        arrows: false,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 2000,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderData = [
        {
            image: ImageOurStory,
            text: "<p>Founded in October 12/07/2019, <strong>Folinas</strong> is one of the leading companies in the field of cross-border e-commerce in Vietnam. We specialize in providing online retail products through reputable platforms such as <strong>Amazon</strong>, <strong>Etsy</strong>, <strong>eBay</strong> and <strong>TikTok Shop</strong>.</p><br/><p>With many years of experience and a commitment to continuous improvement, we have created a solid mark in the industry, always putting product quality first. Our success is a testament to our trustworthiness and reputation on leading platforms in the industry.</p><br/><p>At <strong>Folinas</strong>, our team possesses extensive expertise in technology, design, marketing and customer service. We are proud to create a professional, motivating, and exciting working environment for enthusiastic young professionals. This helps us maintain our leadership position in the ever-evolving e-commerce industry.</p>"   
        },
        {
            image: ImageOurStory2,
            text: "<p>15/09/2023, With many years of experience and a commitment to continuous improvement, we have created a solid mark in the industry, always putting product quality first. Our success is a testament to our trustworthiness and reputation on leading platforms in the industry.</p><br/><p>At <strong>Folinas</strong>, our team possesses extensive expertise in technology, design, marketing and customer service. We are proud to create a professional, motivating, and exciting working environment for enthusiastic young professionals. This helps us maintain our leadership position in the ever-evolving e-commerce industry.</p>"   
        },
    ]

    return (
        <div id="our-store" className="py-12">
            <Container>
                <Heading headingTag="h2" heading="Our Story" />
                <Slider {...settings} className='w-full'>
                    {sliderData.map((item, index) => (
                        <div key={index}>
                            <div className="flex flex-wrap items-center -mx-[15px]">
                                <div className="w-full lg:w-[50%] px-[15px]">
                                    <div className="overflow-hidden rounded-xl">
                                        <Image 
                                            src={item.image}
                                            alt="Logo"
                                            className='max-h-[400px] object-cover'
                                            width={800}
                                            height={400}
                                            priority={false}
                                        />
                                    </div>
                                </div>

                                <div className="w-full mt-5 lg:mt-0 lg:w-[50%] px-[15px]">
                                    <div dangerouslySetInnerHTML={{ __html: item.text }}></div>       
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>  
                <AboutUs />
            </Container>
        </div>
    )
}
 
export default OurStory;