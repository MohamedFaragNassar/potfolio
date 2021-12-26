import React from 'react'

const Landing = () => {
    return (
        <div id='landing' className='w-full sec flex flex-col md:flex-row  items-center justify-start md:justify-center
                        pt-16 md:pt-0 '>
            <div  className='w-full  md:mt-28 lg:mt-10 md:w-5/6  lg:w-11/12  
            flex items-center md:h-full relative'>
                <div className='flex items-center justify-end w-full absolute 
                                 top-2 right-0 lg:hidden'>
                    <a target="_blank" rel="noopener noreferrer" 
                    href='https://drive.google.com/file/d/1u_wlo0TH1nxa7fsHWrn22ZE3qv2e12NV/view?usp=sharing'>
                        <img className='w-8 h-8 mr-2' src='resume.png' alt='resume-icon'/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" 
                    href='https://github.com/MohamedFaragNassar'>
                        <img className='w-8 h-8 mr-2' src='githup.svg' alt='githup-icon' />
                    </a>
                    <a target="_blank" rel="noopener noreferrer"
                    href='https://www.linkedin.com/in/mohamed-farag-farag-81530210a/'>
                        <img className='w-8 h-8 mr-2' src='linkedin.svg' alt='linkedin-icon'/>
                    </a>
                </div>
                <div className=' w-full mt-10 md:mt-0 md:w-1/2 h-full flex flex-col items-start justify-center  
                   md:justify-start md:pt-20 lg:justify-center lg:pt-0 p-4 '>
                    <span className='text-xl md:text-2xl font-bold text-tc'>Hi,</span>
                    <span className='text-xl md:text-2xl font-bold text-tc' >I am Mohamed Farag</span>
                    <span className='text-lg md:text-xl font-bold text-tc-s' >Web Developer</span>
                    <p className='mt-4 text-gray-800  md:text-gray-600 text-lg w-5/6 md:w-3/4 '>
                        I can help you build and deploy modern, high performance 
                        full stack web applications using the latest web and cloud technologies.
                    </p>
                </div>
                <div className='w-1/2 h-full hidden md:flex items-center justify-center
                    md:items-start md:pt-20 lg:items-center lg:pt-0'>
                    <img className='max-w-full max-h-full' src='./main-img.svg' alt='main-image'/>
                </div>
            </div>
            <svg className='absolute  w-full hidden lg:block wave-top' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fillOpacity="1" d="M0,192L34.3,192C68.6,192,137,192,206,170.7C274.3,149,343,107,411,96C480,85,549,107,617,122.7C685.7,139,754,149,823,160C891.4,171,960,181,1029,202.7C1097.1,224,1166,256,1234,224C1302.9,192,1371,96,1406,48L1440,0L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </svg>
            <img src='simg1.svg' className='absolute sec-img -z-10 opacity-30 md:hidden'  alt='art'/>
       </div>
    )
}

export default Landing
