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
        flex items-center justify-center bg-white z-20 '>
            <div className='w-full md:w-5/6 lg:w-11/12 h-full flex items-center justify-between'>
                <button className='ml-4 md:ml-0 px-4 py-1 bg-mc text-white font-bold
                text-2xl rounded-sm font-sans cursor-pointer' onClick={()=>scrollTo("landing")}>M.F.N</button>
                <div className='hidden md:flex items-center md:w-2/5 lg:w-1/4 justify-between'>
                    <span onClick={()=>scrollTo("landing")} className='cursor-pointer hover:text-tc font-medium'>Home</span>
                    <span onClick={()=>scrollTo("about")} className='cursor-pointer hover:text-tc font-medium'>About</span>
                    <span onClick={()=>scrollTo("projects")} className='cursor-pointer hover:text-tc font-medium'>Projects</span>
                    <span onClick={()=>scrollTo("contact")} className='cursor-pointer hover:text-tc font-medium'>Contact</span>
                </div>
                <div className='pr-4 relative md:hidden lg:block'>
                    <div className='hidden lg:flex items-center justify-center'>
                        <a target="_blank" rel="noopener noreferrer" 
                        href='https://drive.google.com/file/d/1u_wlo0TH1nxa7fsHWrn22ZE3qv2e12NV/view?usp=sharing'>
                            <img className='w-8 h-8 mr-2' src='resume.png' alt='resume-icon' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" 
                        href='https://github.com/MohamedFaragNassar'>
                            <img className='w-8 h-8 mr-2' src='githup.svg' alt='githup-icon' />
                        </a>
                        <a target="_blank" rel="noopener noreferrer"
                        href='https://www.linkedin.com/in/mohamed-farag-farag-81530210a/'>
                            <img className='w-8 h-8 mr-2' src='linkedin.svg' alt='linkedin-icon' />
                        </a>
                    </div>
                    <div className='relative md:hidden'>
                        {menuState === "closed" ?
                        <span className='z-20 menu-icon' onClick={()=>setMenuState("open")}>
                            <img src='menu.svg' className='w-8 h-8' alt='menu-icon' />
                        </span> : 
                        <span className='z-20 menu-icon' onClick={()=>setMenuState("closed")}>
                            <img src='close.svg' className='w-8 h-8' alt='close-icon' />
                        </span>
                        }
                        <SideMenu state={menuState} close={()=>setMenuState("closed")}   />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
