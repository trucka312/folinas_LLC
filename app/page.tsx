'use client'
import VisionBackground from '@/public/images/visions/vision.jpg'
import MissionBackground from '@/public/images/missions/mission.jpg'

import OurStory from "@/app/components/Sections/OurStory";
import BannerFullWidth from "./components/Sections/BannerFullWidth";
import Partners from "./components/Sections/Partners";

export default function Home() {
  const visionData = '<p>We aspire to become a global leader in both brands and technologies.</p>'
  const missionData = '<p>Our mission is to offer global consumers superior quality branded products with unique features at affordable prices.</p>'
  return (
    <>
      <OurStory/>
      <BannerFullWidth title='Vision' image={VisionBackground} imageAlt='Vision' content={visionData} imageClassName='max-h-[558px]' />
      <BannerFullWidth title='Mission' image={MissionBackground} imageAlt='Mission' content={missionData} className='text-right' imageClassName='max-h-[752px]' contentClassName='ml-auto' />
      <Partners/>
    </>
  );
}