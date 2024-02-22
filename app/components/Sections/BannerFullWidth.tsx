import Image, { StaticImageData } from "next/image";

import { fontSecondary } from "@/app/libs/fonts";

import Heading from "../Commons/Heading";

interface BannerFullWidthProps {
  className?: string;
  title?: string;
  image: StaticImageData;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt: string;
  imageClassName?: string;
  content: TrustedHTML;
  contentClassName?: string;
}

const BannerFullWidth = ({
  className,
  title,
  image,
  imageClassName,
  imageWidth,
  imageHeight,
  imageAlt,
  content,
  contentClassName,
}: BannerFullWidthProps) => {
  return (
    <div className={`relative ${className && className}`}>
      <div className="after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgb(0,0,0)_100%)]">
        <Image
          src={image}
          alt={imageAlt}
          className={`max-w-full object-cover ${
            imageClassName && imageClassName
          }`}
          width={imageWidth || 2048}
          height={imageHeight || 1152}
          priority={false}
        />
      </div>
      <div
        className={`absolute top-[50%] -translate-y-[50%] left-0 right-0 z-1 px-[50px] py-10 text-white ${fontSecondary.className}`}
      >
        {title && (
          <Heading
            headingTag="h2"
            heading={title}
            className="uppercase text-[20px] !mb-1 animate-fadeInDown"
          />
        )}
        <div
          className={`text-[30px] max-w-[700px] leading-9 ${
            contentClassName && contentClassName
          }`}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
};

export default BannerFullWidth;
