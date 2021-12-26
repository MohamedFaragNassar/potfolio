import React from 'react'
import ProjectCard from './ProjectCard'

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
        <div className='w-full flex items-center justify-center bg-gr pb-20 relative'>
            <div className='w-full h-80 absolute -top-24 -z-10 bg-gr '></div>
            <svg className='absolute -top-36 z-10 hidden lg:block' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,128L12,122.7C24,117,48,107,72,106.7C96,107,120,117,144,128C168,139,192,149,216,176C240,203,264,245,288,256C312,267,336,245,360,208C384,171,408,117,432,85.3C456,53,480,43,504,53.3C528,64,552,96,576,117.3C600,139,624,149,648,144C672,139,696,117,720,106.7C744,96,768,96,792,85.3C816,75,840,53,864,80C888,107,912,181,936,181.3C960,181,984,107,1008,74.7C1032,43,1056,53,1080,53.3C1104,53,1128,43,1152,69.3C1176,96,1200,160,1224,170.7C1248,181,1272,139,1296,144C1320,149,1344,203,1368,213.3C1392,224,1416,192,1428,176L1440,160L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path></svg>
            <div id='projects' className=' w-full md:w-5/6 lg:w-11/12  mt-10 flex flex-col pt-24'>
                <span className='w-full text-center font-bold text-2xl text-tc-s mt-5'>Projects</span>
                <div className='w-full flex flex-col items-center'>
                        {projects.map((project,index) => 
                            <ProjectCard project={project} key={index} />
                        )}
                </div>
            </div>
        </div>
    )
}

export default Projects
