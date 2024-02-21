'use client';
import * as React from "react"
import { useTheme } from "next-themes"
import { BsMoonStars, BsSun } from "react-icons/bs"

interface DarkModeProps {
    align?: string;
}

const DarkMode = ({ align = 'right' }: DarkModeProps) => {
    const { setTheme } = useTheme()
    const [ openDarkMode, setOpenDarkMode ] = React.useState(false)
    const handleChangeTheme = (theme: string) => {
        setTheme(theme)
        setOpenDarkMode(!openDarkMode)
    }
    
    return (
        <div className="relative inline-block align-middle">
            <button className="relative border-[1px] p-2 rounded-md overflow-hidden" onClick={() => setOpenDarkMode(!openDarkMode)}>  
                <BsSun className="h-[1.2rem] w-[1.2rem] transition-all dark:-translate-y-[200%]" />
                <BsMoonStars className="h-[1.2rem] w-[1.2rem] transition-all absolute translate-y-[200%] top-[100%] dark:top-[50%] dark:-translate-y-[50%]"/>
            </button>
            <ul className={`bg-white dark:bg-[#222] text-black dark:text-white absolute top-[120%] ${align}-0 px-5 py-3 rounded-md ${openDarkMode ? 'scale-1' : 'scale-0'} transition-all duration-500 shadow-[0_10px_15px_-3px_rgba(0,0,0,.1),_0_4px_6px_-4px_rgba(0,0,0,.1)]`}>
                <li className="cursor-pointer" onClick={() => handleChangeTheme("light")}>Light</li>
                <li className="cursor-pointer" onClick={() => handleChangeTheme("dark")}>Dark</li>
                <li className="cursor-pointer" onClick={() => handleChangeTheme("system")}>System</li>
            </ul>
        </div>
    )
}
 
export default DarkMode;