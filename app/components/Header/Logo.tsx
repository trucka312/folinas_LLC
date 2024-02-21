'use client';
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import LogoImage from "@/public/images/Logo.png";

const Logo = () => {
    const router = useRouter()
    const pathname = usePathname()
    const LogoImageRender = () => {
        return (
            <Image
                onClick={() => router.push('/')}
                src={LogoImage}
                alt="Logo"
                className="hidden md:block cursor-pointer max-h-[52px] w-auto"
                width={1020}
                height={536}
                priority={false}
            />
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