import Link from "next/link";
import { IconType } from "react-icons";

interface FooterContactItemProps {
    icon?: IconType;
    content: TrustedHTML;
    link?: string;
    className?: string;
}

const ContactInformationItem = ({ icon: Icon, content, link, className }: FooterContactItemProps) => {    
    return (
        <div className={`flex ${className&&className} mb-3 last:mb-0`}>
            <span className="mr-3 opacity-60">{Icon && <Icon size={20} />}</span>
            {link ?
                <Link href={link} className="flex-1 inline-block" dangerouslySetInnerHTML={{__html: content }}></Link>
            :
                <div className="flex-1" dangerouslySetInnerHTML={{__html: content }}></div>
            }
        </div>
    )
}
 
export default ContactInformationItem;