const ProjectCard = ({ project }) => {
  return (
    <div
      className={` w-11/12 md:w-8/12 lg:w-2/3 h-fit  lg:h-72 border rounded-lg flex flex-col lg:flex-row 
        items-center mt-6 shadow-lg bg-white pr-details relative `}
    >
      <div className='w-full lg:w-1/2 h-2/5  lg:h-full flex items-center justify-centers p-2'>
        <img
          className='h-full w-full'
          src={project.image}
          alt={`${project.title}-image`}
        />
      </div>
      <div className='w-full lg:w-1/2 h-full flex flex-col items-start justify-between p-2'>
        <div className='w-full flex flex-col'>
          <span className='text-sm lg:text-lg font-bold text-tc'>
            {project.title}
          </span>
        </div>
        <div className='w-full flex flex-col'>
          <span className='w-full lg:w-10/12 text-gray-600 text-sm '>
            {project.snippit}
          </span>
        </div>
        <div className='w-full flex items-center justify-evenly'>
          {project.tech.map((t, index) => (
            <div
              key={index}
              className='flex items-center justify-center p-1 
                        rounded-lg '
            >
              <img
                className='w-8 h-8 lg:w-10 lg:h-10'
                src={t == "laravel" ? `${t}.png` : `${t}.svg`}
                alt={`${t}-icon`}
              />
            </div>
          ))}
        </div>

        <div className='w-full flex items-center justify-evenly '>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={project.githup}
            className='flex items-center justify-center py-1 px-4
                     hover:bg-gray-100 rounded-lg'
          >
            <img
              className='w-8 h-8 lg:w-10 lg:h-10 mr-2'
              src='githup.svg'
              alt='githup-icon'
            />
            <span>Code</span>
          </a>
          {project?.title === "Project Manger" ? (
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={project.live}
              className='flex items-center justify-center py-1 px-4
                     hover:bg-gray-100 rounded-lg'
            >
              <img
                className='w-6 h-6 lg:w-8 lg:h-8 mr-2'
                src='open.png'
                alt=' '
              />
              <span>Open</span>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
