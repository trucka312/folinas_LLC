import { FaFacebookF, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

import SocialItem from "./SocialItem";

const Social = () => {
    const socialData = [
        {
            icon: FaTwitter,
            href: "#"
        },
        {
            icon: FaFacebookF,
            href: "#"
        },
        {
            icon: FaPinterest,
            href: "#"
        },
        {
            icon: TfiYoutube,
            href: "#"
        },
        {
            icon: FaInstagram,
            href: "#"
        }
    ]

    return (
        <ul id="social-list" className="mt-10">
            {socialData.map((item, index) => (
                <li key={index} className="inline-block mx-[15px] first:ml-0 last:mr-0"><SocialItem icon={item.icon} href={item.href} className="opacity-60 hover:opacity-100" /></li>
            ))}
        </ul>
    )
}
 
export default Social;