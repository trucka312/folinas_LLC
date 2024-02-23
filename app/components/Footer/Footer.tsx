"use client";
import Container from "@/app/components/Commons/Container";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterLogo from "./FooterLogo";
import CopyRight from "./CopyRight";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" },
    { label: "Our Service", href: "/our-services" },
    { label: "Recruitment", href: "/recruitment" },
  ];
  const ourEcosystem = [
    { label: "fousel.net", href: "https://fousel.net/" },
    { label: "folinas.com", href: "https://folinas.com/" },
  ];

  return (
    <Container>
      <footer className="border-t-[1px]">
        <div className="flex flex-wrap pt-10 -mx-[15px]">
          <div className="px-[15px] order-1 w-full md:w-[70%] md:order-1 lg:w-[70%] lg:mb-10 xl:w-[30%] xl:order-1">
            <FooterLogo />
          </div>
          <div className="px-[15px] order-3 w-full md:w-[30%] md:order-2 lg:w-[30%] lg:mb-10 xl:w-[20%] xl:order-2">
            <FooterLinks items={ourEcosystem} title="Our EcoSystem" />
          </div>
          <div className="px-[15px] order-4 w-full md:w-[30%] md:order-4 lg:w-[30%] lg:mb-10 xl:w-[20%] xl:order-3">
            <FooterLinks items={quickLinks} title="Quick links" />
          </div>
          <div className="px-[15px] order-2 w-full md:w-[70%] md:order-3 lg:w-[70%] lg:mb-10 xl:w-[30%] xl:order-4">
            <FooterContact />
          </div>
        </div>
        <CopyRight />
      </footer>
    </Container>
  );
};

export default Footer;
