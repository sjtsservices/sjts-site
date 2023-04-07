import { Avatar } from 'antd'
import Image from 'next/image'
import React from 'react'

const Logo = () => {
    const logoImage = '/assets/logo/logo.png'
  return (
    <span className="inline-flex w-12 md:w-16">
        <Image className='max-w-full h-auto'  alt=" Logo "src={logoImage} width={100} height={100} ></Image>
    </span>
  )
}

export default Logo