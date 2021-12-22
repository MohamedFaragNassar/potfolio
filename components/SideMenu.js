import React, { useEffect } from 'react'

const SideMenu = ({state,close}) => {
    useEffect(() => {
    }, [state])
    return (
        <div id='side-menu' className={`w-screen h-screen bg-gray-500 absolute pt-4 ${state} menu`}>
            <span onClick={close}>close</span>
        </div>
    )
}

export default SideMenu
