'úe client';
import Image from "next/image";
import React, { useEffect } from "react";

import AboutImage from '@/public/images/about/about-4.jpg'
import Heading from "../Commons/Heading";

const TalkingNumber = () => {
    const [staff, setStaff] = React.useState(0);
    const [yearDev, setYearDev] = React.useState(0);
    const [partner, setPartner] = React.useState(0);
    const [department, setDepartment] = React.useState(0);

    const dataNumber = [
        {
            number: yearDev,
            title: 'Years of establishment and development'
        },
        {
            number: staff,
            title: 'Staff'
        },
        {
            number: department,
            title: 'Branch'
        },
        {
            number: partner,
            title: 'Partners worldwide'
        }
    ]

    useEffect(() => {
        const targetStaff = 200;
        const targetYearDev = 7;
        const targetDepartment = 12;
        const targetPartner = 170;
    
        const staffDuration = 1000; // 1 second
        const yearDevDuration = 2000; // 2 seconds
        const departmentDuration = 1500; // 1.5 seconds
        const partnerDuration = 1800; // 1.8 seconds
    
        const staffIntervalTime = staffDuration / targetStaff;
        const yearDevIntervalTime = yearDevDuration / targetYearDev;
        const departmentIntervalTime = departmentDuration / targetDepartment;
        const partnerIntervalTime = partnerDuration / targetPartner;
    
        const animateValue = (
          currentValue: number,
          setFunction: React.Dispatch<React.SetStateAction<number>>,
          targetValue: number,
          intervalTime: number
        ) => {
          let current = 0;
    
          const intervalId = setInterval(() => {
            current += 1;
            setFunction(current);
    
            if (current === targetValue) {
              clearInterval(intervalId);
            }
          }, intervalTime);
    
          return intervalId;
        };
    
        const staffIntervalId = animateValue(
          0,
          setStaff,
          targetStaff,
          staffIntervalTime
        );
        const yearDevIntervalId = animateValue(
          0,
          setYearDev,
          targetYearDev,
          yearDevIntervalTime
        );
        const departmentIntervalId = animateValue(
          0,
          setDepartment,
          targetDepartment,
          departmentIntervalTime
        );
        const partnerIntervalId = animateValue(
          0,
          setPartner,
          targetPartner,
          partnerIntervalTime
        );
    
        return () => {
          clearInterval(staffIntervalId);
          clearInterval(yearDevIntervalId);
          clearInterval(departmentIntervalId);
          clearInterval(partnerIntervalId);
        };
    }, []);
    
    return (
        <div className="mt-20 flex flex-wrap -mx-[15px]">
            <div className="px-[15px] w-full md:w-[50%]">
                <div className="rounded-md overflow-hidden">
                    <Image src={AboutImage} alt="Talking Number Image"/>
                </div>
            </div>
            <div className="px-[15px] w-full md:w-[50%]">
                <Heading headingTag="h2" heading="The numbers Folinas have achieved"/>
                <div className="pl-10">
                    {dataNumber.map((item, index) => (
                        <div key={index} className="flex flex-wrap items-end mb-10 last:mb-0 group">
                            <span className="text-[rgb(var(--second-rgb))] text-6xl font-semibold min-w-[170px] group-hover:scale-125 transition-all duration-500">
                                {item.number} +
                            </span>
                            <p className="ml-6 flex-1">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
 
export default TalkingNumber;