import React from 'react'

export type OGDeviderProps = {
    width?: string,

}

const OGDevider = () => {
  return (
    <div className='bg-indigo-500 w-full h-[1px] bg-gradient-to-r text-lg from-amber-500 to-pink-500'></div>
  )
}

export default OGDevider