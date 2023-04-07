import React from 'react'
import OGPaper from './OGPaper'

const OGNoEventsFound = () => {
  return (
    <OGPaper className='grid place-items-center py-20 px-5 w-full'>
        <h2 className='text-3xl max-w-xl text-center bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent'>Oops! Looks Like We Don&apos;t Have Any Events Scheduled Right Now.</h2>
    </OGPaper>
  )
}

export default OGNoEventsFound