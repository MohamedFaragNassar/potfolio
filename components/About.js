import React from 'react'

const About = () => {
    return (
        <div id='about'  className='w-full flex items-center justify-center lg:h-screen relative '>
           <div className='w-full bg-mc flex items-center justify-center h-full p-4 lg:p-0 lg:h-2/3 pt-20 lg:pt-0y'>
            <div className=' w-full md:w-5/6 lg:w-11/12 h-full flex flex-col lg:flex-row items-center '>
                    <div className='w-full lg:w-1/2  lg:h-full  flex flex-col items-center
                     lg:items-start justify-center'>
                        <span className='lg:absolute lg:top-32 text-white text-xl font-bold 
                        mb-5 lg:mb-0'>About Me</span>
                        <div className='w-full flex items-start'><img className='w-20 h-20 ' src='avatar.svg' /></div>
                        <p className='mt-4 text-gray-600 w-full lg:w-3/4 p-4 bg-white 
                        rounded-2xl shadow-xl relative about-me text-lg'>
                            My passion for software engineering started 5 years ago when I took my first coding class in c++,
                            from that moment I started developing new skills and learning new technologies.
                            I have been working as a freelancer for one year now, and I helped people build a 
                            digital presence for their businesses, 
                            and I am excited to work alongside other programmers and learn much more.
                        </p>
                    </div>
                    <div className=' w-full lg:w-1/2 h-full flex flex-col lg:flex-row
                     items-center justify-center pt-20'>
                        <span className='lg:absolute lg:top-32 text-white text-xl font-bold
                        mb-10 lg:mb-0'>Skills</span>
                        <div className='w-full h-full flex flex-col items-center'>
                            <div className='relative'>
                                <img className=' w-16 h-16 lg:w-20 lg:h-20 absolute -top-10' src='js.svg' />
                                <div className='w-fit pr-3 bg-white h-16 lg:h-20 rounded-md pl-16 md:pl-20 flex 
                                items-center justify-start'>
                                    <div className='flex items-center justify-center p-1 lg:p-2 
                                    rounded-md border border-green-500 mr-4'>
                                        <img className='w-8 h-8 lg:w-10 lg:h-10' src='node.svg' />
                                        <span className='ml-2'>Node JS</span>
                                    </div>
                                    <div className='flex items-center justify-center  p-1 lg:p-2  
                                    rounded-md border border-blue-500'>
                                        <img className='w-8 h-8 lg:w-10 lg:h-10' src='react.svg' />
                                        <span className='ml-2'>React JS</span>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex items-center justify-evenly mt-16'>
                                <div className='relative md:w-2/5'>
                                    <img  src='python.svg'
                                    className='w-16 h-16 lg:w-20 lg:h-20 absolute -top-12 md:-top-10 -left-6 md:left-0' />
                                    <div className='w-full  bg-white h-16 lg:h-20 rounded-md  flex 
                                    items-center justify-center pl-5 md:pl-20 pr-2'>
                                        <div className='flex items-center justify-center p-1 lg:p-2 
                                        rounded-md border border-black '>
                                            <img className='w-8 h-8 lg:w-10' src='dj.svg' />
                                            <span className='ml-2'>Django</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='relative md:w-2/5 flex items-center justify-end'>
                                    <img className='w-16 h-16 lg:w-20 lg:h-20 absolute -top-10 -right-6 md:right-0' 
                                    src='php.svg' />
                                    <div className='w-full bg-white h-16 lg:h-20 rounded-md  flex 
                                    items-center justify-center  pr-5 md:pr pl-2'>
                                        <div className='flex items-center justify-center p-1 lg:p-2 
                                        rounded-md border border-red-500 '>
                                            <img className='w-8 h-8 lg:w-10' src='laravel.png' />
                                            <span className='ml-2'>laravel</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='relative w-full flex items-center justify-start mt-16'>
                                <img className=' w-12 h-12 lg:w-16 lg:h-16 absolute -top-10 md:-top-6
                                lg:-top-10' src='web.png' />
                                <div className='w-full pr-3 bg-white h-16 lg:h-20 rounded-md pl-2 md:pl-20 flex 
                                items-center justify-evenly'>
                                    <div className='flex items-center justify-center p-1 lg:p-2  
                                    rounded-md border border-green-700 '>
                                        <img className='w-8 h-8 lg:w-10' src='mongo.svg' />
                                        <span className='hidden md:block ml-2'>Mongodb</span>
                                    </div>
                                    <div className='flex items-center justify-center p-1 lg:p-2  
                                    rounded-md border border-orange-500'>
                                        <img className='w-8 h-8 lg:w-10' src='mysql.svg' />
                                        <span className='ml-2 hidden md:block'>Mysql</span>
                                    </div>
                                    <div className='flex items-center justify-center p-1 lg:p-2  
                                    rounded-md border border-red-300 '>
                                        <img className='w-8 h-8 lg:w-10' src='graphql.svg' />
                                        <span className='ml-2 hidden md:block'>Graphql</span>
                                    </div>
                                    <div className='flex items-center justify-center p-1 lg:p-2  
                                    rounded-md border border-orange-700 md:px-5' >
                                        <img className='w-8 h-8 lg:w-10' src='git.svg' />
                                        <span className='ml-2 hidden md:block'>Git</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
           <svg className='absolute wave-bottom z-10 hidden lg:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L12,122.7C24,117,48,107,72,106.7C96,107,120,117,144,128C168,139,192,149,216,176C240,203,264,245,288,256C312,267,336,245,360,208C384,171,408,117,432,85.3C456,53,480,43,504,53.3C528,64,552,96,576,117.3C600,139,624,149,648,144C672,139,696,117,720,106.7C744,96,768,96,792,85.3C816,75,840,53,864,80C888,107,912,181,936,181.3C960,181,984,107,1008,74.7C1032,43,1056,53,1080,53.3C1104,53,1128,43,1152,69.3C1176,96,1200,160,1224,170.7C1248,181,1272,139,1296,144C1320,149,1344,203,1368,213.3C1392,224,1416,192,1428,176L1440,160L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path></svg>
        </div>
    )
}

export default About
