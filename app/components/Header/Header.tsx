"use client";
import * as React from 'react';
import { usePathname } from 'next/navigation'

import Container from "@/app/components/Commons/Container";
import BannerTop from "@/app/components/Sections/BannerTop";
import Breadcrumbs from './Breadcrumbs';
import Logo from "./Logo";
import MainMenu from "./MainMenu";
import DarkMode from "./DarkMode";
import MenuMobile from './MenuMobile';
import MultiLanguage from './MultiLanguage';
import Loading from '../Loading/Loading/Loading';

interface HeaderProp {
    className?: string;
}

const Header = ({className}: HeaderProp) => {
    const pathname = usePathname()
    const [isScrolledUp, setIsScrolledUp] = React.useState(false)
    const [isShowMenuMobile, setIsShowMenuMobile] = React.useState(false)
    const headerRef = React.useRef<HTMLDivElement | null>(null)
    const headerHeight = headerRef.current?.clientHeight || 0

    const handleOpenMenuMobile = React.useCallback(() => {
        setIsShowMenuMobile(true)
        
    }, [])
    
    const handleCloseMenuMobile = React.useCallback((isOpen: boolean) => {
        setIsShowMenuMobile(isOpen);
    }, [])
    
    React.useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 100);
    }, [])    
    
    React.useEffect(() => {        
        let lastScrollPosition = window.scrollY || document.documentElement.scrollTop;        
        const handleScroll = () => {
            if (window.scrollY > 80) {
                const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
                const isUp = currentScrollPosition < lastScrollPosition
                setIsScrolledUp(isUp)        
                lastScrollPosition = currentScrollPosition
            } else {
                setIsScrolledUp(false)
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerRef, headerHeight]);
    const pathnameIgnore = ['', 'en', 'vi']
    const breadcrumbs = pathname.split('/').filter(item => !pathnameIgnore.includes(item));    

    return (
        <header className={className}>
            {breadcrumbs.length === 0 ? <BannerTop /> : <Breadcrumbs breadcrumbs={breadcrumbs} />}
            <div ref={headerRef} id='header' className={`${(isScrolledUp) ? 'fixed animate-fadeInDown bg-white text-black shadow-[6px_0_15px_2px_hsla(220,9%,46%,.251)]' : 'absolute bg-[linear-gradient(180deg,rgb(0_0_0/77%),rgb(0_0_0/8%))] text-white'} top-0 left-0 right-0 z-[2] transition-all py-5`}>
                <Container>
                    <div className="flex flex-wrap items-center justify-center md:justify-between">
                        <button className='relative w-[37px] h-[37px] border-[1px] rounded-md inline-block cursor-pointer md:hidden' onClick={() => handleOpenMenuMobile()}>
                            <span className='w-[1.4rem] h-[1px] bg-white inline-block absolute top-[10px] left-[5px]'></span>
                            <span className='w-[0.9rem] h-[1px] bg-white inline-block absolute top-[50%] left-[5px] -translate-y-[50%]'></span>
                            <span className='w-[1.2rem] h-[1px] bg-white inline-block absolute bottom-[10px] left-[5px]'></span>
                        </button>
                        <div className='flex-1 md:flex-[initial] flex md:block justify-center text-center'><Logo pathname={breadcrumbs} /></div>
                        <div className="hidden md:block space-x-4">
                            <MainMenu/>
                            <DarkMode/>
                            <MultiLanguage/>
                        </div>
                        <div className={`block md:hidden fixed top-0 right-0 bottom-0 left-0 transition-all duration-400 ${isShowMenuMobile ? 'translate-x-0 opacity-1' : '-translate-x-[100%] opacity-0'}`}>
                            <MenuMobile onShow={handleCloseMenuMobile}/>
                        </div>
                    </div>
                </Container>
            </div>
        </header>
    )
}

export default Header