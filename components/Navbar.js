import React, { useState } from 'react'
import SideMenu from './SideMenu'

const Navbar = () => {
    const [menuState,setMenuState] = useState("closed")
    const scrollTo = (id) => {
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
    return (
        <div id='nav' className='w-full h-14 border border-b-2 fixed top-0 
        flex items-center justify-center bg-white z-10 '>
            <div className='w-full md:w-5/6 lg:w-11/12 h-full flex items-center justify-between'>
                <span className='text-xl ml-4 md:ml-0'>M.F.N</span>
                <div className='flex items-center w-1/4 justify-between'>
                    <span onClick={()=>scrollTo("landing")} className='cursor-pointer'>Home</span>
                    <span onClick={()=>scrollTo("about")} className='cursor-pointer'>About</span>
                    <span onClick={()=>scrollTo("projects")} className='cursor-pointer'>Projects</span>
                    <span onClick={()=>scrollTo("contact")} className='cursor-pointer'>Contact</span>
                </div>
                <div className='pr-4'>
                    <div className='relative md:hidden'>
                        <span onClick={()=>setMenuState("open")}>icon</span>
                        <SideMenu state={menuState} close={()=>setMenuState("closed")}  />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
