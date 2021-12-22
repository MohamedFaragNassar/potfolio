import React from 'react'

const About = () => {
    return (
        <div id='about' className=' w-full md:w-5/6 lg:w-11/12 h-screen mt-10 flex items-center bg-slate-500'>
            <div className='w-1/2 h-full flex flex-col items-start justify-center'>
                <span>About Me</span>
                <p className='mt-4 text-gray-600 w-3/4 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book.
                </p>
            </div>
            <div className='w-1/2 h-full flex items-center justify-center'>
                <span>Skilss</span>
                <div></div>
            </div>
        </div>
    )
}

export default About
