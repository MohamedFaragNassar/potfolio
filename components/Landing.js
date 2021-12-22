import React from 'react'

const Landing = () => {
    return (
        <div id='landing' className='w-full md:w-5/6 lg:w-11/12 h-3/5 mt-10 flex items-center sec'>
            <div className='w-1/2 h-full flex flex-col items-start justify-center'>
                <span>Hi,</span>
                <span >I am Mohamed Farag</span>
                <span>Web Developer</span>
                <p className='mt-4 text-gray-600 w-3/4 '>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type 
                     specimen book.
                </p>
            </div>
            <div className='w-1/2 h-full flex items-center justify-center'>
                <img className='max-w-full max-h-full' src='./img1.jpg' />
            </div>
        </div>
    )
}

export default Landing
