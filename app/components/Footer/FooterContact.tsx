'use client';
import { IconType } from 'react-icons';

import ContactInformationItem from '../Sections/ContactInformationItem';
import Heading from '../Commons/Heading';

interface ContactInformationItemProps {
    icon: IconType;
    content: string;
    link?: string;
}

interface ContactInformationProps {
    title?: string;
    data: ContactInformationItemProps[];
    className?: string;
}

const FooterContact = ({ data, title, className }: ContactInformationProps) => {    
    return (
        <div className={`mt-[29px] ${className&&className}`}>
            {title && <Heading headingTag="h4" heading={title}  />}
            <ul>
                {data?.map((item, index) => {                    
                    return (
                        <ContactInformationItem key={index} icon={item.icon} content={item.content} link={item.link&&item.link} />
                    )
                })}
            </ul>
        </div>
    )
}
 
export default FooterContact;