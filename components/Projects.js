import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
    {
        title:"Project Manger",
        snippit:"Project Mangment Tool",
        live:"",
        githup:"",
        tech:["node","react","graphql","mongodb"],
        image:""
    },
    {
        title:"Electronices Shop",
        snippit:"E-Commerce Platform",
        live:"",
        githup:"",
        tech:["node","react","mongodb"],
        image:""
    },
    {
        title:"Social App",
        snippit:"Social Media Platform ( Twitter Clone )",
        live:"",
        githup:"",
        tech:["Django","react","mysql"],
        image:""
    },
    {
        title:"Workers Station",
        snippit:"A Platform For Renting Services",
        live:"",
        githup:"",
        tech:["Laravel","react","Mysql"],
        image:""
    },
    
]

const Projects = () => {
    return (
        <div id='projects' className=' w-full md:w-5/6 lg:w-11/12  mt-10 flex flex-col pt-24'>
           <span>Projects</span>
           <div className='w-full flex flex-col items-center'>
                {projects.map((project,index) => 
                    <ProjectCard project={project} key={index} />
                )}
           </div>
        </div>
    )
}

export default Projects
