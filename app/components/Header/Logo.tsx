'use client';
import Image from "next/image";
import { usePathname } from "next/navigation";

import LogoImage from "@/public/images/Logo.png";
import Link from "next/link";

const Logo = () => {
    const pathname = usePathname()
    const LogoImageRender = () => {
        return (
            <Link href='#'>
                <Image
                    src={LogoImage}
                    alt="Logo"
                    className="cursor-pointer max-h-[52px] w-auto mx-auto"
                    width={1020}
                    height={536}
                    priority={false}
                />
            </Link>
        )
    }
    
    return (
        <>
            {pathname === '/' && <h1><LogoImageRender/> </h1> }
            {pathname !== '/' && <LogoImageRender/> }
        </>
    )
}

export default Logo;