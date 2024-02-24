import Link from "next/link";
import { IconType } from "react-icons";

interface SocialProps {
    icon: IconType;
    label?: string;
    href: string;
    className?: string;
}

const SocialItem = ({ icon: Icon, label, href, className }: SocialProps) => {
    return (
        <Link href={href} className={className&&className} target="_blank">
            <Icon size={20} />
            {label && <span className="ml-3">{label}</span> }
        </Link>
    )
}
 
export default SocialItem;