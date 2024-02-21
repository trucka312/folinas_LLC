"use client";
import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation'

import Container from "@/app/components/Commons/Container";
import BannerTop from "@/app/components/Sections/BannerTop";
import Breadcrumbs from './Breadcrumbs';
import Logo from "./Logo";
import MainMenu from "./MainMenu";
import DarkMode from "./DarkMode";

interface HeaderProp {
    className?: string;
}

const Header = ({className}: HeaderProp) => {
    const pathname = usePathname()
    const [isScrolledUp, setIsScrolledUp] = useState(false)
    const headerRef = useRef<HTMLDivElement | null>(null)
    const headerHeight = headerRef.current?.clientHeight || 0
    
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, [])    
    
    useEffect(() => {        
        let lastScrollPosition = window.scrollY || document.documentElement.scrollTop;
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
            const isUp = currentScrollPosition < lastScrollPosition
            setIsScrolledUp(isUp)          
            lastScrollPosition = currentScrollPosition
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerRef, headerHeight]);
    

    return (
        <header className={className}>
            {pathname === '/' && <BannerTop />}
            {pathname !== '/' && <Breadcrumbs pathName={pathname} />}            
            <div ref={headerRef} id='header' className={`${(isScrolledUp) ? 'fixed animate-fadeInDown' : 'absolute'} top-0 left-0 right-0 z-[2] transition-all py-5 bg-[linear-gradient(180deg,rgb(0_0_0/77%),rgb(0_0_0/8%))] text-white`}>
                <Container>
                    <div className="flex flex-wrap items-center justify-between">
                        <Logo/>
                        <div className="flex items-center">
                            <MainMenu/>
                            <DarkMode/>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Header