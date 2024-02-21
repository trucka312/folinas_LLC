'use client';
import Image from "next/image";

import Heading from "@/app/components/Commons/Heading";
import InformationImage from "@/public/images/about/about-3.jpg";

const AboutInformation = () => {
    return (
        <div className="flex flex-wrap justify-between mt-20 -mx-[15px]">
            <div className="px-[15px] w-full lg:w-[50%] mb-[30px] lg:mb-0">
              <div>
                <Heading headingTag="h2" heading="Information" />

                <div>
                  <p>Folinas, a leading cross-border e-commerce company, operates seamlessly across prominent platforms such as Shopify, Etsy, Amazon, eBay, TikTokShop, and our own website Fousel.com.</p>
                  <br/>
                  <p>We specialize in delivering high-quality products at the best prices, ensuring swift and efficient delivery. Collaborating with major brands, we strive to bring top-notch products to consumers worldwide. </p>
                  <br/>
                  <p>Our relentless dedication reflects in our ongoing efforts to be a steadfast, long-term partner, building trust and delivering excellence to our valued customers.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] px-[15px]">
              <div className="rounded-md overflow-hidden">
                <Image src={InformationImage} alt="About Information" className="max-h-[400px] object-cover object-bottom"/>
              </div>
            </div>
        </div>
    )
}
 
export default AboutInformation;