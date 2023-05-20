import React from "react";

const About = () => {
  return (
    <div
      id='about'
      className='w-full flex items-center justify-center lg:h-screen relative '
    >
      <div
        className='w-full bg-mc flex items-center justify-center h-full p-4 
           lg:p-0 lg:h-2/3 pt-20 lg:pt-0'
      >
        <div className=' w-full md:w-5/6 lg:w-11/12 h-full flex flex-col lg:flex-row items-start pt-10 '>
          <div
            className='w-full lg:w-1/2  flex flex-col items-center
                     lg:items-start justify-center'
          >
            <span
              className=' text-white text-xl font-bold 
                        mb-5'
            >
              About Me
            </span>
            <div className='w-full flex items-start'>
              <img className='w-20 h-20 ' src='avatar.svg' />
            </div>
            <p
              className='mt-4 text-gray-600 w-full lg:w-3/4 p-4 bg-white 
                        rounded-2xl shadow-xl relative about-me text-lg'
            >
              Frontend engineer with expertise in React and e-commerce and
              marketing tools. I have a proven track record of developing
              intuitive and engaging web applications that drive business
              growth. My experience includes developing e-commerce platforms,
              marketing automation tools, and content management systems. I have
              strong project management skills, and I am adept at collaborating
              with cross- functional teams to deliver high-quality products on
              time.
            </p>
          </div>
          <div
            className=' w-full lg:w-1/2 h-full flex flex-col 
                     items-center justify-start pt-10'
          >
            <span
              className='text-white text-xl font-bold
                        mb-10'
            >
              Skills
            </span>
            <div className='w-full flex flex-col items-center'>
              <div
                className='relative w-full pr-3 bg-white rounded-md pl-16 md:pl-20 flex 
                                items-center justify-start lg:justify-evenly flex-wrap gap-4 p-4'
              >
                <img
                  className='w-12 h-12 lg:w-16 lg:h-16 absolute -top-10 md:-top-6 -left-1
                  lg:-top-10'
                  src='js.svg'
                />
                <div
                  className='flex items-center justify-center  p-1 lg:p-2  
                                    rounded-md border border-blue-500'
                >
                  <img className='w-8 h-8 lg:w-10 lg:h-10' src='react.svg' />
                  <span className='ml-2'>React JS</span>
                </div>
                <div
                  className='flex items-center justify-center  p-1 lg:p-2  
                                    rounded-md border border-blue-500'
                >
                  <img className='w-8 h-8 lg:w-10 lg:h-10' src='redux.svg' />
                  <span className='ml-2'>Redux</span>
                </div>
                <div
                  className='flex items-center justify-center  p-1 lg:p-2  
                                    rounded-md border border-blue-500'
                >
                  <img
                    className='w-8 h-8 lg:w-10 lg:h-10'
                    src='typescript.svg'
                  />
                  <span className='ml-2'>Typescript</span>
                </div>
                <div
                  className='flex items-center justify-center p-1 lg:p-2 
                                    rounded-md border border-green-500'
                >
                  <img className='w-8 h-8 lg:w-10 lg:h-10' src='node.svg' />
                  <span className='ml-2'>Node JS</span>
                </div>
              </div>

              <div
                className='relative w-full pr-3 bg-white rounded-md pl-16 md:pl-20 flex 
                                items-center justify-start lg:justify-evenly flex-wrap gap-4 p-4 mt-16'
              >
                <img
                  className='w-12 h-12 lg:w-16 lg:h-16 absolute -top-10 md:-top-6 left-0
                  lg:-top-10'
                  src='web.png'
                />
                <div
                  className='flex items-center justify-center  p-1 lg:p-2  
                                    rounded-md border border-blue-500'
                >
                  <img className='w-8 h-8 lg:w-10 lg:h-10' src='git.svg' />
                  <span className='ml-2'>Git</span>
                </div>
                <div
                  className='flex items-center justify-center  p-1 lg:p-2  
                                    rounded-md border border-blue-500'
                >
                  <img className='w-8 h-8 lg:w-10 lg:h-10' src='docker.svg' />
                  <span className='ml-2'>Docker</span>
                </div>
                <div
                  className='flex items-center justify-center  p-1 lg:p-2  
                                    rounded-md border border-blue-500'
                >
                  <img className='w-8 h-8 lg:w-10 lg:h-10' src='graphql.svg' />
                  <span className='ml-2'>GraphQl</span>
                </div>
                <div
                  className='flex items-center justify-center p-1 lg:p-2 
                                    rounded-md border border-green-500'
                >
                  <img className='w-8 h-8 lg:w-10 lg:h-10' src='figma.svg' />
                  <span className='ml-2'>Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
