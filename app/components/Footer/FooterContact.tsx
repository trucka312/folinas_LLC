import Link from "next/link";
import { FaMapMarkerAlt, FaClock  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Heading from "../Commons/Heading";

const FooterContact = () => {
    const contactData = [
        {
            icon: FaMapMarkerAlt,
            content: '4th Floor, 75A/59 Hoang Cau Street, Dong Da district, Ha Noi'
        },
        {
            icon: MdEmail,
            content: 'contact@folinas.com',
            link: { pathname: 'mailto: contact@folinas.com'}
        },
        {
            icon: FaClock,
            content: '<span>Mon-Sat 7:30am-4:30pm</span><span>Sun: Close</span>'
        },
    ]
    return (
       <div className="mt-[29px]">
            <Heading headingTag="h4" heading="Contact us" />
            <ul>
                {contactData?.map((item, index) => (
                    <li key={index} className={`flex mb-2 last:mb-0`}>
                        <span className="mr-3 opacity-60"><item.icon size={20} /></span>
                        {item.link ?
                            <Link href={item.link} className="flex-1 inline-block">
                                <span dangerouslySetInnerHTML={{__html: item.content }}></span>
                            </Link>
                        :
                            <p className="flex-1 *:block" dangerouslySetInnerHTML={{__html: item.content }}></p>
                        }
                    </li>
                ))}
            </ul>
       </div> 
    )
}
 
export default FooterContact;