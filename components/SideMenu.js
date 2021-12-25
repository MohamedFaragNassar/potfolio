import React, { useEffect } from 'react'

const SideMenu = ({state,close}) => {
    const handleScroll = (id) => {
        close()
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth'
        });
    }
    useEffect(() => {
    }, [state])
    return (
        <div id='side-menu' className={`w-screen h-screen bg-mc absolute pt-4 ${state} menu`}>
           <div className='flex flex-col items-center w-full mt-10 justify-between'>
                <span onClick={()=>handleScroll("landing")} className='cursor-pointer text-2xl font-bold text-white p-8'>Home</span>
                <span onClick={()=>handleScroll("about")} className='cursor-pointer text-2xl font-bold text-white p-8'>About</span>
                <span onClick={()=>handleScroll("projects")} className='cursor-pointer text-2xl font-bold text-white p-8'>Projects</span>
                <span onClick={()=>handleScroll("contact")} className='cursor-pointer text-2xl font-bold text-white p-8'>Contact</span>
            </div>
        </div>
    )
}

export default SideMenu
