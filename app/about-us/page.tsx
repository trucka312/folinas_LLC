"use client";

import React, { useEffect } from "react";

import Container from "../components/Commons/Container";
import AboutInformation from "../components/Sections/AboutInformation";
import TalkingNumber from "../components/Sections/TalkingNumber";
import AboutGrowing from "../components/Sections/AboutGrowing";

const AboutUs = () => {
  const [staff, setStaff] = React.useState(0);
  const [yearDev, setYearDev] = React.useState(0);
  const [partner, setPartner] = React.useState(0);
  const [department, setDepartment] = React.useState(0);

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
    <Container>
      <div className="">
        <AboutInformation/>
        <TalkingNumber/>
        <AboutGrowing/>
      </div>
    </Container>
  );
};

export default AboutUs;
