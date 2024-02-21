'use client';
import * as React from "react";
import { MdGTranslate } from "react-icons/md";

interface MultiLanguagerops {
    align?: string;
}

const MultiLanguage = ({ align = 'right' }: MultiLanguagerops) => {
    const [ openLanguageOptions, setOpenLanguageOptions ] = React.useState(false)

    return (
        <div className="relative inline-block align-middle">
            <button className="relative border-[1px] p-2 rounded-md overflow-hidden" onClick={() => setOpenLanguageOptions(!openLanguageOptions)}>  
                <MdGTranslate className="h-[1.2rem] w-[1.2rem]" />
            </button>
            <ul className={`min-w-[150px] bg-white dark:bg-[#222] text-black dark:text-white absolute top-[120%] ${align}-0 px-5 py-3 rounded-md ${openLanguageOptions ? 'scale-1' : 'scale-0'} transition-all duration-500 shadow-[0_10px_15px_-3px_rgba(0,0,0,.1),_0_4px_6px_-4px_rgba(0,0,0,.1)]`}>
                <li className="cursor-pointer" onClick={() => {}}>Tiếng Việt</li>
                <li className="cursor-pointer" onClick={() => {}}>English</li>
            </ul>
        </div>
    )
}
 
export default MultiLanguage;