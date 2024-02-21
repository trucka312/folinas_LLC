'use client';
import { IconType } from 'react-icons';

import ContactInformationItem from './ContactInformationItem'
import Heading from '../Commons/Heading';

interface ContactInformationItemProps {
    icon: IconType;
    content: string;
    link?: string;
}

interface ContactInformationProps {
    data: ContactInformationItemProps[];
    className?: string;
}

const ContactInformation = ({ data, className }: ContactInformationProps) => {    
    return (
        <div className={className&&className}>
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
 
export default ContactInformation;