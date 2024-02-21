'use client';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Heading from "../Commons/Heading";
import Social from "../Commons/Social";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

const ContactMethod = () => {
    const contactData = [
        {
            icon: FaMapMarkerAlt,
            content: '4th Floor, 75A/59 Hoang Cau Street, Dong Da district, Ha Noi'
        },
        {
            icon: MdEmail,
            content: 'contact@folinas.com',
            link: 'mailto: contact@folinas.com'
        },
        {
            icon: FaPhoneAlt,
            content: '(+84) 096 446 3304',
            link: 'tel: 096 446 3304'
        },
        {
            icon: FaClock,
            content: '<p>Mon-Sat 7:30am-4:30pm</p><p>Sun: Close</p>'
        },
    ]
    
    return (
        <div className="my-20 flex flex-wrap -mx-[15px]">
            <div className="w-full md:w-[50%] px-[15px]">
                <Heading heading="Folinas information" headingTag="h2" className="!text-[34px]"/>
                <ContactInformation data={contactData} />

                <div className="mt-10">
                    <Heading heading="Chat with us" headingTag="h2" className="!text-[34px]" />
                    <Social/>
                </div>
            </div>

            <div className="w-full md:w-[50%] px-[15px]">
                <Heading heading="Get in touch with us" headingTag="h2" className="!text-[34px]"/>
                <p className="mb-5">If you have any questions, please don’t hesitate to send us a message. We will reply to you as soon as possible.</p>
                <ContactForm/>
            </div>
        </div>
    )
}
 
export default ContactMethod;