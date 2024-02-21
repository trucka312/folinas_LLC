'use client';
import { fontSecondary } from '@/app/libs/fonts'

interface HeadingProps {
    headingTag: string;
    heading: string;
    className?: string;
}

const Heading = ({headingTag, heading, className}: HeadingProps) => {
    const HeadingTag = headingTag as keyof JSX.IntrinsicElements;
    return (
        <HeadingTag className={`mb-6 ${fontSecondary.className} ${className&&className}`}>
            {heading}
        </HeadingTag>
    )
}
 
export default Heading;