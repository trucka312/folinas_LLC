import Image from "next/image";

import IntroductionImage from '@/public/images/services/service.png'

const IntroductionServices = () => {
    return (
        <div id="introduction-services" className="mt-10">
            <div className="flex flex-wrap items-center -mx-[15px]">
                <div className="w-full lg:w-[50%] px-[15px] mb-[30px] lg:mb-0">
                    <p><strong>Amazon</strong>, <strong>Etsy</strong>, <strong>eBay</strong>, <strong>TikTok Shops</strong> are comprehensive eCommerce sites that drive sales and brand growth. Here, sellers can conveniently sell products directly and reach a rich source of customers. In addition, customers can also explore products, product details, payment and post-payment activities,... . </p>
                    <br/>
                    <p>At the same time, not only is it convenient for customers to buy, but sellers are also provided with many utilities to manage and monitor their stalls as well as other marketing and business activities.</p>
                </div>
                <div className="w-full lg:w-[50%] px-[15px]">
                    <Image
                        src={IntroductionImage}
                        alt="Introduction Services"
                        className="max-w-[500px] mx-auto"
                        width={1020}
                        height={536}
                        priority={false}
                    />
                </div>
            </div>
        </div>
    )
}
 
export default IntroductionServices;