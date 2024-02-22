'use client';
import Heading from "../Commons/Heading";
import ContactForm from "./ContactForm";
import ContactInformation from "./ContactInformation";

const ContactMethod = () => {

    
    return (
        <div className="mt-10 flex flex-wrap -mx-[15px]">
            <div className="w-full lg:w-[50%] px-[15px] mb-10 lg:mb-0">
                <Heading heading="Folinas information" headingTag="h2" className="!text-[34px]"/>
                <ContactInformation/>
            </div>

            <div className="w-full lg:w-[50%] px-[15px]">
                <Heading heading="Get in touch with us" headingTag="h2" className="!text-[34px]"/>
                <p className="mb-5">If you have any questions, please don’t hesitate to send us a message. We will reply to you as soon as possible.</p>
                <ContactForm/>
            </div>
        </div>
    )
}
 
export default ContactMethod;