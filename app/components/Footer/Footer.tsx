"use client";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Container from "@/app/components/Commons/Container";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import CopyRight from "./CopyRight";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/#" },
    { label: "Our Service", href: "/#" },
    { label: "Recruitment", href: "/#" },
  ];
  const ourEcosystem = [
    { label: "fousel.net", href: "https://fousel.net/" },
    { label: "folinas.com", href: "https://folinas.com/" },
  ];

  const contactData = [
    {
      icon: FaMapMarkerAlt,
      content: "4th Floor, 75A/59 Hoang Cau Street, Dong Da district, Ha Noi",
    },
    {
      icon: MdEmail,
      content: "contact@folinas.com",
      link: "mailto: contact@folinas.com",
    },
    {
      icon: FaClock,
      content: "<p>Mon-Sat 7:30am-4:30pm</p><p>Sun: Close</p>",
    },
  ];

  return (
    <footer className="border-[1px]">
      <Container>
        <div className="flex flex-wrap pt-10 -mx-[15px]">
          <div className="w-full md:w-[50%] lg:w-[30%]">
            <FooterLogo />
          </div>
          <div className="w-full md:w-[50%] lg:w-[20%]">
            <FooterLinks items={ourEcosystem} title="Our EcoSystem" />
          </div>
          <div className="w-full md:w-[50%] lg:w-[20%]">
            <FooterLinks items={quickLinks} title="Quick links" />
          </div>
          <div className="w-full md:w-[50%] lg:w-[30%]">
            <FooterContact data={contactData} title="Contact us" />
          </div>
        </div>
        <CopyRight />
      </Container>
    </footer>
  );
};

export default Footer;
