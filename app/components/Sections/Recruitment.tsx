'use client';

import Link from "next/link";
import Heading from "../Commons/Heading";

const Recruitment = () => {
    const recruitmentData = [
        {
            id: 1,
            name: 'Technical ',
            items: [
                {
                    title: 'Software Engineer',
                    pdf: 'https://drive.google.com/file/d/1LL4B96wKNOWIt_V0wd8TfNTrer7OH3a8/view?usp=sharing'
                }
            ]
        },
        {
            id: 2,
            name: 'Support ',
            items: [
                {
                    title: 'Support IT',
                    pdf: 'https://drive.google.com/file/d/1LL4B96wKNOWIt_V0wd8TfNTrer7OH3a8/view?usp=sharing'
                },
                {
                    title: 'Business Support',
                    pdf: 'https://drive.google.com/file/d/1LL4B96wKNOWIt_V0wd8TfNTrer7OH3a8/view?usp=sharing'
                }
            ]
        },
        {
            id: 3,
            name: 'Raw Material',
            items: [
                {
                    title: 'Idea Creator',
                    pdf: 'https://drive.google.com/file/d/1LL4B96wKNOWIt_V0wd8TfNTrer7OH3a8/view?usp=sharing'
                },
                {
                    title: 'Account Manager',
                    pdf: 'https://drive.google.com/file/d/1LL4B96wKNOWIt_V0wd8TfNTrer7OH3a8/view?usp=sharing'
                }
            ]
        }, 
    ]
    return (
        <div className="flex flex-wrap -mx-[15px] mt-10 lg:mt-20 mb-20">
            {recruitmentData.map(item => (
                <div key={item.id} className="w-full lg:w-[50%] px-[15px] mb-[30px] lg:mb-0">
                    <Heading headingTag="h3" heading={item.name} className="!mb-2" />
                    <ol>
                        {item.items.map((jobItem, index) => (
                            <li key={index} className="mb-5">
                                <p>
                                    <span>Job name:</span>&nbsp;
                                    <strong>{jobItem.title}</strong>
                                </p>
                                <p>
                                    <span>Link job:</span>&nbsp;
                                    <Link href={jobItem.pdf} className="text-[#2222ef]" target="_blank">{jobItem.pdf}</Link>
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            ))}

        </div>
    )
}
 
export default Recruitment;