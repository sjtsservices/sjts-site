import React, { PropsWithChildren } from 'react'

const OGCtaButton = ({
    children
}: PropsWithChildren) => {
  return (
    <div className='relative'>
        <button className=' z-20 inline-flex px-6 py-3 text-lg font-semibold border border-gray-100 rounded bg-gray-100/20 cursor-pointer text-white backdrop-blur capitalize relative'>
        {children}
        
    </button>
    <span className='absolute w-full h-full left-0 top-0'></span>
    </div>

  )
}

export default OGCtaButton