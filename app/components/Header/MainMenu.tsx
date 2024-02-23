'use client';
import * as React from "react"
import { useTranslations } from "next-intl";
import Link from "next/link"

const MainMenu = () => {
    const t = useTranslations('Sections.Menu')
    const menuData = [
        {
            link: {pathname: "/"},
            label: t('item_1')
        },
        {
            link: {pathname: "/about-us"},
            label: t('item_2')
        },
        {
            link: {pathname: "/our-services"},
            label: t('item_3')
        },
        {
            link: {pathname: "/contact"},
            label: t('item_4')
        },
        {
            link: {pathname: "/recruitment"},
            label: t('item_5')
        },
        {
            link: {pathname: "/blog"},
            label: t('item_6')
        }
    ]

    return (
        <nav id="nav-main" className="inline-block align-middle">
            <ul>
                {menuData.map((item, index) => (
                    <li key={index} className="inline-block align-middle">
                        <Link href={item.link} className="px-4 py-3 transition font-semibold cursor-pointer hover:text-[rgb(var(--second-rgb))]">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
 
export default MainMenu;