'use client';
import Link from 'next/link';
import { FaAnglesRight } from "react-icons/fa6"

import BreadcrumbsImage from '@/public/images/breadcrumbs/breadcrumbs.jpg'
import Image from 'next/image';
import Container from '../Commons/Container';
import Heading from '../Commons/Heading';

interface BreadcrumbsProps {
    pathName: string;
}

const Breadcrumbs = ({ pathName }: BreadcrumbsProps) => {
    const breadcrumbsData = pathName.split('/').filter(Boolean)
    
    return (
        <div className='relative after:bg-[rgba(0,_0,_0,_.3)] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 overflow-hidden'>
            <Image
                src={BreadcrumbsImage}
                alt="Logo"
                className='max-w-full] h-[350px] lg:h-[initial] object-cover'
                width={3000}
                height={900}
                priority={false}
            />
            <div className='absolute top-0 right-0 bottom-0 left-0 flex items-center text-center z-[1] text-white'>
                <Container>
                    <Heading headingTag='h1' heading={breadcrumbsData[breadcrumbsData.length - 1].replace('-', ' ')} className='mb-5 capitalize' />
                    <ul>
                        <li className='inline-block'><Link href='/'>Home</Link></li>
                        {breadcrumbsData?.map((item, index) => (
                            <li key={index} className='inline-block'>
                                &nbsp;/&nbsp;
                                {breadcrumbsData.length - 1 !== index && <Link href={item}>{item.replace('-', ' ')}</Link>}
                                {breadcrumbsData.length - 1 === index && <span>{item.replace('-', ' ')}</span>}
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        </div>
    )
}
 
export default Breadcrumbs;