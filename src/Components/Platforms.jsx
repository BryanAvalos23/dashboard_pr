import React from 'react'

// Icons
import { CiGlobe } from 'react-icons/ci'
import { FaApple, FaTabletAlt } from 'react-icons/fa'
import { DiAndroid } from 'react-icons/di'

const Platforms = () => {
  return (
    <div className=' p-5 bg-white rounded-xl'>
      <h1 className='text-2xl font-bold text-gray-700'>Platforms</h1>
      <div className='p-2 grid grid-cols-2 gap-8'>
        <div className='space-y-3 text-gray-500'>
          <h2 className='text-2xl font-bold'>58</h2>
          <p className='flex items-center space-x-2'>
            <CiGlobe /> <span>WebSite</span>
          </p>
        </div>

        <div className='space-y-3 text-gray-500'>
          <h2 className='text-2xl font-bold'>87</h2>
          <p className='flex items-center space-x-2'>
            <FaApple /> <span>IOS</span>
          </p>
        </div>

        <div className='space-y-3 text-gray-500'>
          <h2 className='text-2xl font-bold'>25</h2>
          <p className='flex items-center space-x-2'>
            <DiAndroid /> <span>Android</span>
          </p>
        </div>

        <div className='space-y-3 text-gray-500'>
          <h2 className='text-2xl font-bold'>25</h2>
          <p className='flex items-center space-x-2'>
            <FaTabletAlt /> <span>Tablets</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Platforms