'use client';
import * as React from "react"
import { useTheme } from "next-themes"
import { BsMoonStars, BsSun } from "react-icons/bs"

const DarkMode = () => {
    const { setTheme } = useTheme()
    const [ openDarkMode, setOpenDarkMode ] = React.useState(false)
    
    return (
        <div className="relative">
            <button className="relative border-[1px] border p-2 rounded-md overflow-hidden" onClick={() => setOpenDarkMode(!openDarkMode)}>  
                <BsSun className="h-[1.2rem] w-[1.2rem] transition-all dark:-translate-y-[200%]" />
                <BsMoonStars className="h-[1.2rem] w-[1.2rem] transition-all absolute translate-y-[200%] top-[100%] dark:top-[50%] dark:-translate-y-[50%]"/>
            </button>
            <ul className={`bg-white dark:bg-[#222] text-black dark:text-white absolute top-[120%] right-0 px-5 py-3 rounded-md ${openDarkMode ? 'scale-1' : 'scale-0'} transition-all duration-500`}>
                <li className="cursor-pointer" onClick={() => setTheme("light")}>Light</li>
                <li className="cursor-pointer" onClick={() => setTheme("dark")}>Dark</li>
                <li className="cursor-pointer" onClick={() => setTheme("system")}>System</li>
            </ul>
        </div>
    )
}
 
export default DarkMode;