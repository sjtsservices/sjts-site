import { Button } from 'antd'
import React from 'react'

const content = {

}

const HrDivider = () => {
  return (
    <div className='h-64 bg-no-repeat bg-center bg-cover flex items-center justify-center text-whiteb relative text-white px-5' style={{backgroundImage: `url(${'/assets/images/hr-divider.webp'})`}}>
        <div className='z-20'>
        <h2 className='text-5xl md:text-6xl max-w-2xl text-center '><span className='text-primary '>Need First Class</span> HR Consultant</h2>
        <div className='flex items-center justify-center mt-5'><Button type="primary" size="large">Get Enquiry</Button></div>
        </div>
        <div className='absolute w-full h-full left-0 top-0  bg-gradient-to-r from-primary-dark/30 to-purple-700/30 backdrop-blur-sm'></div>
    </div>
  )
}

export default HrDivider