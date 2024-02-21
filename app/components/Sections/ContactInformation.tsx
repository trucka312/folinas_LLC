'use client';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import ContactInformationItem from './ContactInformationItem'
import Social from "../Commons/Social";
import Heading from "../Commons/Heading";

const ContactInformation = () => {
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
        <div>
            <ul>
                {contactData?.map((item, index) => {                    
                    return (
                        <ContactInformationItem key={index} icon={item.icon} content={item.content} link={item.link&&item.link} />
                    )
                })}
            </ul>

            <div className="mt-10">
                <Heading heading="Chat with us" headingTag="h2" className="!text-[34px]" />
                <Social/>
            </div>
        </div>
    )
}
 
export default ContactInformation;