import React from 'react'
import ProjectStatics from '../Components/ProjectStatics'
import Platforms from '../Components/Platforms'
import { PROJECTS } from '../constantes/projects'
import ProjectCard from '../Components/ProjectCard'
import ClientCard from '../Components/ClientCard'
import { CLIENTS } from '../constantes/clients'

const Home = () => {
  return (
    <div className=' p-5'>
      <div className='grid md:grid-cols-4 gap-4'>
        <ProjectStatics />
        <Platforms />
        <ProjectStatics />
        <Platforms />
      </div>

      <div>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-lg font-semibold'>Current Projects</h1>
          <p className='text-sm underline text-indigo-600'>See All</p>
        </div>

        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
          {
            PROJECTS && PROJECTS.map(project => <ProjectCard project={project} />)
          }
        </div>
      </div>

      <div>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-lg font-semibold'>Current Clients</h1>
          <p className='text-sm underline text-indigo-600'>See All</p>
        </div>

        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
          {
            CLIENTS && CLIENTS.map(client => <ClientCard client={client} />)
          }
        </div>
      </div>
    </div>
  )
}

export default Home