'use client';
import * as React from "react"
import { useRouter } from "next/navigation";
import { IoMdClose } from "react-icons/io";


import MenuItem from "@/app/components/Header/MenuItem"
import Heading from "../Commons/Heading";
import DarkMode from "./DarkMode";
import MultiLanguage from "./MultiLanguage";

interface MenuMobileProps {
    onShow: (show: boolean) => void;
}

const MenuMobile = ({ onShow }: MenuMobileProps) => {
    const router = useRouter()

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

    const handleClick = (link: string) => {
        router.push(link)
        onShow(false)
    }

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
                        <MenuItem onClick={() => handleClick(`${item.link}`)} label={item.label}/>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
 
export default MenuMobile;