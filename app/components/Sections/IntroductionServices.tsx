import Image from "next/image";

import IntroductionImage from '@/public/images/services/service.png'

const IntroductionServices = () => {
    return (
        <div className="max-w-[1200px] flex wrap items-center -mx-[15px] mt-10 mx-auto">
            <div className="w-full md:w-[50%] px-[15px]">
                <p><strong>Amazon</strong>, <strong>Etsy</strong>, <strong>eBay</strong>, <strong>TikTok Shops</strong> are comprehensive eCommerce sites that drive sales and brand growth. Here, sellers can conveniently sell products directly and reach a rich source of customers. In addition, customers can also explore products, product details, payment and post-payment activities,... . </p>
                <br/>
                <p>At the same time, not only is it convenient for customers to buy, but sellers are also provided with many utilities to manage and monitor their stalls as well as other marketing and business activities.</p>
            </div>
            <div className="w-full md:w-[50%] px-[15px]">
                <Image
                    src={IntroductionImage}
                    alt="Introduction Services"
                    className="max-w-[500px]"
                    width={1020}
                    height={536}
                    priority={false}
                />
            </div>
        </div>
    )
}
 
export default IntroductionServices;