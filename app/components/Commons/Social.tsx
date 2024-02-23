import { FaFacebookF, FaTwitter, FaTiktok , FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

import SocialItem from "./SocialItem";

const Social = () => {
    const socialData = [
        {
            icon: FaTwitter,
            href: "https://twitter.com/folinasoffcial"
        },
        {
            icon: FaFacebookF,
            href: "https://www.facebook.com/folinasgroup/"
        },
        {
            icon: FaTiktok,
            href: "https://www.tiktok.com/@folinasllc"
        },
        {
            icon: TfiYoutube,
            href: "https://www.youtube.com/@Folinasllc"
        },
        {
            icon: FaInstagram,
            href: "https://www.instagram.com/folinasofficial/"
        }
    ]

    return (
        <ul id="social-list" className="mt-10">
            {socialData.map((item, index) => (
                <li key={index} className="inline-block mx-[15px] first:ml-0 last:mr-0">
                    <SocialItem icon={item.icon} href={item.href} className="opacity-60 hover:opacity-100" />
                </li>
            ))}
        </ul>
    )
}
 
export default Social;