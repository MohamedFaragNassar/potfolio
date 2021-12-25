import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectCard2 from './ProjectCard2'

const projects = [
    {
        title:"Project Manger",
        snippit:"A web Application designed to assist a project manager in developing a schedule, assigning resources to tasks, tracking progress, managing the budget, and analyzing workloads.( Microsoft Project clone)",
        live:"https://project-manger.herokuapp.com/",
        githup:"https://github.com/MohamedFaragNassar/projects-manger.git",
        tech:["node","react","graphql","mongo"],
        image:"project.PNG"
    },
    {
        title:"Electronices Shop",
        snippit:"E-Commerce platform for electronic devices, where you can buy your favorite devices or save them in your whishlist to buy later. All the data for products,orders and users can be managed through the admin dashboard ",
        live:"https://electronices-shop.herokuapp.com/",
        githup:"https://github.com/MohamedFaragNassar/projects-manger.git",
        tech:["node","react","mongo"],
        image:"e-com.PNG"
    },
    {
        title:"Social App",
        snippit:"Social Media Platform where you can share your thoughts, follow other people stories and control the privacy of your account    .( Twitter Clone )",
        live:"https://socialapp12.herokuapp.com/",
        githup:"https://github.com/MohamedFaragNassar/soicial-app.git",
        tech:["dj","react","mysql"],
        image:"social.PNG"
    },
    {
        title:"Workers Station",
        snippit:"A Platform For Renting Services, you can join as a seller to offer your services or as a client to find the best seller for the service your looking for. The services allowed on the app can be managed through the admin dashboard",
        live:"https://project.herokuapp.com/",
        githup:"https://github.com/MohamedFaragNassar/soicial-app.git",
        tech:["laravel","react","mysql"],
        image:"workers.PNG"
    },
    
]

const Projects = () => {
    return (
        <div className='w-full flex items-center justify-center bg-gr pb-40 relative'>
            <div className='w-full h-80 absolute -top-24 -z-10 bg-gr '></div>
            <div id='projects' className=' w-full md:w-5/6 lg:w-11/12  mt-10 flex flex-col pt-24'>
                <span className='w-full text-center font-bold text-2xl text-tc-s mt-5'>Projects</span>
                <div className='w-full flex flex-col items-center'>
                        {projects.map((project,index) => 
                            <ProjectCard project={project} key={index} />
                        )}
                </div>
            </div>
            <svg className='absolute -bottom-80 hidden lg:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#F7F7F7" fillOpacity="1" d="M0,160L13.3,144C26.7,128,53,96,80,96C106.7,96,133,128,160,149.3C186.7,171,213,181,240,160C266.7,139,293,85,320,96C346.7,107,373,181,400,208C426.7,235,453,213,480,186.7C506.7,160,533,128,560,112C586.7,96,613,96,640,85.3C666.7,75,693,53,720,53.3C746.7,53,773,75,800,101.3C826.7,128,853,160,880,176C906.7,192,933,192,960,202.7C986.7,213,1013,235,1040,245.3C1066.7,256,1093,256,1120,234.7C1146.7,213,1173,171,1200,181.3C1226.7,192,1253,256,1280,250.7C1306.7,245,1333,171,1360,144C1386.7,117,1413,139,1427,149.3L1440,160L1440,0L1426.7,0C1413.3,0,1387,0,1360,0C1333.3,0,1307,0,1280,0C1253.3,0,1227,0,1200,0C1173.3,0,1147,0,1120,0C1093.3,0,1067,0,1040,0C1013.3,0,987,0,960,0C933.3,0,907,0,880,0C853.3,0,827,0,800,0C773.3,0,747,0,720,0C693.3,0,667,0,640,0C613.3,0,587,0,560,0C533.3,0,507,0,480,0C453.3,0,427,0,400,0C373.3,0,347,0,320,0C293.3,0,267,0,240,0C213.3,0,187,0,160,0C133.3,0,107,0,80,0C53.3,0,27,0,13,0L0,0Z"></path>
            </svg>
        </div>
    )
}

export default Projects
