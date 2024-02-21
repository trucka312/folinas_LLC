'use client'
import { MdDesignServices, MdNewspaper, MdOutlineSupportAgent, MdOutlineTrendingUp } from "react-icons/md";

import Container from "../Commons/Container";
import Heading from "../Commons/Heading";

const OurServices = () => {
    const servicesData = [
        {
            icon: MdDesignServices,
            title: 'Innovative Designs',
            content: '<p>Our team takes immense pride in our capacity to transform concepts into distinct and polished designs.<p/><p>We generate and encapsulate value by presenting trendy ideas, blending imaginative perspectives with exceptional design expertise. What’s more, when you opt for our products, you gain access to a diverse range of pre-made design choices and the opportunity to personalize them with your own artwork, designs, or preferred quotes. With our print-on-demand services, the possibilities are limitless for unleashing your creativity.</p>'
        },
        {
            icon: MdNewspaper,
            title: 'Exceptional Products',
            content: '<p>Our commitment is to deliver remarkable products at reasonable prices to our customers.<p/><p><strong>Folinas</strong> guarantees that the products we provide meet rigorous quality benchmarks. We offer a broad selection, encompassing a variety of options such as t-shirts, shirts, and hoodies in different sizes to cater to various moods and occasions. Our product range also extends to items like mugs, posters, and more. If you have a specific vision in mind, simply share your requirements with us, and witness how we can transform your ideas into captivating and personalized items.</p>'
        },
        {
            icon: MdOutlineTrendingUp,
            title: 'Professional sales team',
            content: '<p>At Folinas, we have a professional sales team, with rich experience and unique thinking and ideas on the most popular platforms globally.<p/><p>With a team of mostly young generations, we always grasp and stay at the forefront of new, outstanding trends, bringing customers interesting and new experiences on each product.</p>'
        },
        {
            icon: MdOutlineSupportAgent,
            title: 'Outstanding Customer Service',
            content: '<p>Our customers occupy a central place in our organization, as we recognize that their happiness is closely tied to feeling well-supported.<p/><p>We make it our mission to enrich your experience through our committed support team, readily available to assist with your inquiries via email, online chat, or phone.</p><p>Notably, we’ve not only achieved a remarkable milestone of over one million ratings and reviews but also boast an impressive 4.8 out of 5-star overall satisfaction rating. This rating underscores that 96% of our customers are classified as “very happy” with the quality of products and services they receive.</p>'
        }
    ]
    return (
        <div id="our-services" className="my-20">
            <Container>
                <Heading headingTag="h2" heading="Our Services" className="text-center" />
                <div className="mt-5 flex flex-wrap -mx-[15px]">
                    {servicesData.map((item, index) => (
                        <div key={index} className="w-full md:w-[50%] px-[15px] mb-[30px]">
                            <div className="h-full p-5 flex wrap hover:bg-[rgb(var(--second-rgb)_/5%)] rounded-md border-[1px]">
                                <div className="mr-10 w-[80px] h-[80px] flex items-center justify-center rounded-full bg-[rgb(var(--second-rgb)_/50%)]">
                                    <item.icon size={40}/>
                                </div>
                                <div className="flex-1">
                                    <Heading headingTag="h3" heading={item.title} />
                                    <div dangerouslySetInnerHTML={{__html: item.content}}></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}
 
export default OurServices;