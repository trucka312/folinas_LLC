import { FaMapMarkerAlt, FaClock  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Heading from "../Commons/Heading";
import FooterContactItem from './FooterContactItem'

const FooterContact = () => {
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
            icon: FaClock,
            content: '<p>Mon-Sat 7:30am-4:30pm</p><p>Sun: Close</p>'
        },
    ]
    return (
       <div className="mt-[29px]">
            <Heading headingTag="h4" heading="Contact us" />
            <ul>
                {contactData?.map((item, index) => (
                    <FooterContactItem key={index} icon={item.icon} content={item.content} link={item.link&&item.link} />
                ))}
            </ul>
       </div> 
    )
}
 
export default FooterContact;