import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'

const ProjectCard = ({project}) => {
    const [projectState,setProjectState] = useState(false)
    return (
        <div className={` w-2/3 h-60 border rounded-md flex items-center mt-6
         pr-details relative ${projectState ? 'project-open' : ""}`} >
             <div className='w-1/2 h-full flex items-center justify-centers'>
                <img src='./img1.jpg' />
             </div>
             <div className='w-1/2 h-full flex flex-col items-start justify-between p-2'>
                <div className='w-full flex flex-col'>
                    <span>{project.title}</span>
                    <span className='w-10/12 text-gray-600'>{project.snippit}</span>
                    
                </div>
                <div className='w-full flex items-center justify-evenly'>
                    <span>Node</span>
                    <span>React</span>
                    <span>Mongo DB</span>
                </div>
                
                <div className='w-full flex items-center justify-evenly'>
                    <span>Githup</span>
                    <span>Live</span>
                    <span>More Details</span>
                </div>
                
             </div>
        </div>
    )
}

export default ProjectCard
