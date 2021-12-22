import React from 'react'

const Contact = () => {
    return (
        <form id='contact' className=' h-screen w-3/4 md:w-2/3 lg:w-1/2 mt-10 flex 
                                        items-center justify-center flex-col  '>
            <span>Contact Me</span>
            <div className='mt-5 w-1/2 flex flex-col items-start'>
                <label>Name</label>
                <input type="text" className='w-full p-3 rounded-sm border mt-2'  />
            </div>
            <div className='mt-5 w-1/2 flex flex-col items-start'>
                <label>Email</label>
                <input type="email" className='w-full p-3 rounded-sm border mt-2' />
            </div>
            <div className='mt-5 w-1/2 flex flex-col items-start'>
                <label>Message</label>
                <textarea className='w-full h-52 resize-none p-3 rounded-sm border mt-2'     />
            </div>
            <input type="submit" className='w-1/2 mt-5 p-3 bg-gray-500 rounded-sm' value="Send" />
        </form>
    )
}

export default Contact
