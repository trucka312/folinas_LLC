"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

import MenuItem from "@/app/components/Header/MenuItem";

const MainMenu = () => {
  const router = useRouter();

  const menuData = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/about-us",
      label: "About Us",
    },
    {
      link: "/our-services",
      label: "Our Services",
    },
    {
      link: "/contact",
      label: "Contact Us",
    },
    {
      link: "/recruitment",
      label: "Recruitment",
    },
  ];

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <nav id="nav-main" className="inline-block align-middle">
      <ul>
        {menuData.map((item, index) => (
          <li key={index} className="inline-block align-middle">
            <MenuItem
              onClick={() => handleClick(`${item.link}`)}
              label={item.label}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainMenu;
