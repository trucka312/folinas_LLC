import { RiProfileLine } from "react-icons/ri";
import { MdOutlineHandshake } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import Heading from "../Commons/Heading";

const AboutUs = () => {
    const dataAboutUs = [
        {
            icon: <RiProfileLine />,
            title: 'Who We Are?',
            content: 'Vietnam’s largest technological ecosystem that creates solutions along the entire value chain, starting with retail, distribution, real estate, and financial services.'
        },
        {
            icon: <MdOutlineHandshake />,
            title: 'Why We Exist?',
            content: 'The ascendency of the nation depends on its technological sophistication.'
        },
        {
            icon: <HiUserGroup />,
            title: 'Whom Do We Serve?',
            content: 'Everyone in Vietnam from individuals and small business owners to major corporate partners.'
        }
    ]
    return (
        <div className="flex wrap -mx-[15px] mt-[60px]">
            {dataAboutUs.map((item, index) => (
                <div key={index} className="w-[calc(100%/3)] px-[15px]">
                    <div className="border-[1px] border-solid p-10 h-full rounded-md shadow-[0_10px_15px_-3px_rgba(0,0,0,.1),_0_4px_6px_-4px_rgba(0,0,0,.1)]">
                        <div className="text-[100px] opacity-60 text-[rgb(var(--second-rgb))] mb-5">{item.icon}</div>
                        <Heading className="mb-5" headingTag="h3" heading={item.title} />
                        <p>{item.content}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}
 
export default AboutUs;