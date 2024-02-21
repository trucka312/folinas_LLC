import Link from "next/link";

const ContactMap = () => {
    return (
        <div className="mt-10 lg:mt-20 w-full">
            <p className="pb-4 flex text-lg">
                Visit our store: &nbsp;<Link href="fousel.com" target="_blank" className="text-[red] text-lg">fousel.net</Link>
            </p>
            <div className="h-[300px] lg:h-[500px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3488493061554!2d105.82525148899822!3d21.017146059539236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0073c731ef%3A0x2b5e8b8e47773783!2sFolinas!5e0!3m2!1svi!2s!4v1708332884964!5m2!1svi!2s"
                    className="w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    )
}
 
export default ContactMap;