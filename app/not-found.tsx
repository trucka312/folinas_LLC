'use client';
import Image from "next/image";
import { usePathname } from "next/navigation"
import "./[locale]/globals.css"

import Heading from "./components/Commons/Heading";

import NotFoundImage from "@/public/images/404/404.png"
import Container from "./components/Commons/Container";
import Link from "next/link";

const NotFound = () => {
    const pathname = usePathname();
    const pathnameIgnore = ['', 'en', 'vi']
    const page = pathname.split('/').filter(item => !pathnameIgnore.includes(item))
        
    return (
        <html>
            <body>
                <main className="h-[100vh] flex items-center">
                    <Container>
                        <div className="flex flex-wrap -mx-[15px]">
                            <div className="w-full md:w-[50%] px-[15px]">
                                <Heading headingTag="h1" heading="Oops...That link is broken."/>
                                <p className="mb-10">Sorry for the inconvenience. Go to our homepage or check out our latest collections.</p>
                                <Link href="/" className="bg-[rgb(var(--btn-bg))] text-[rgb(var(--btn-text))] px-5 py-2 rounded-md hover:bg-[rgb(var(--btn-bg-hv))] hover:text-[rgb(var(--btn-text-hv))]">Go to home</Link>
                            </div>
                            <div className="w-full md:w-[50%] px-[15px]">
                                <Image
                                    src={NotFoundImage}
                                    alt={`Not found ${page&&page[page.length - 1]?.replace('-', ' ')} page`}
                                    className="mx-auto"
                                />
                            </div>
                        </div>
                    </Container>
                </main>
            </body>
        </html>
    )
}
 
export default NotFound;