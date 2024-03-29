'use client';
import * as React from "react"
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

import Heading from "../Commons/Heading";
import DarkMode from "./DarkMode";
import MultiLanguage from "./MultiLanguage";

interface MenuMobileProps {
    onShow: (show: boolean) => void;
}

const MenuMobile = ({ onShow }: MenuMobileProps) => {
    const menuData = [
        {
            link: "/",
            label: 'Home'
        },
        {
            link: "/about-us",
            label: 'About Us'
        },
        {
            link: "/our-services",
            label: 'Our Services'
        },
        {
            link: "/contact",
            label: 'Contact Us'
        },
        {
            link: "/recruitment",
            label: 'Recruitment'
        },
        {
            link: "/blog",
            label: "Blogs"
        }
    ]

    return (
        <nav id="nav-mobile" className="h-full bg-[rgb(var(--background-rgb))] text-[rgb(var(--foreground-rgb))]">
            <div className="flex flex-wrap items-center p-3 bg-[rgb(var(--btn-bg))] text-[rgb(var(--btn-text))] z-[999]">
                <Heading headingTag="h3" heading="Menu" className="!mb-0 flex-1"/>
                <IoMdClose size={25} onClick={() => onShow(false)} />
            </div>
            <div className="my-5 px-4 space-x-[15px]">
                <DarkMode/>
                <MultiLanguage align="left"/>
            </div>
            <ul>
                {menuData.map((item, index) => (
                    <li key={index} className="">
                        <Link href={item.link} 
                            className="px-4 py-3 transition font-semibold cursor-pointer hover:text-[rgb(var(--second-rgb))]"
                            onClick={() => onShow(false)}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
 
export default MenuMobile;