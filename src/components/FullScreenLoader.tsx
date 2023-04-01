import { Spin } from 'antd'
import React from 'react'

const FullScreenLoader = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
        <Spin size='large' />
    </div>
  )
}

export default FullScreenLoader