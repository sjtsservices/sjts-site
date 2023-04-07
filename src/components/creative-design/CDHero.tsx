import React from 'react'
import HeroSection from '../HeroSection'
import { Button } from 'antd'

const content = {
    image: '/assets/images/creative-design-hero.webp',
    title: <h1 className='text-4xl md:text-6xl'>Bring Your Ideas to Life with our <span className='text-amber-400'>Creative Design</span> and <span className='text-amber-400'>Entertainment Services</span></h1>,
    desc: `Whether it's a stunning graphic design or a promotional video, we specialize in bringing your ideas to life with our exceptional creative design and entertainment services. Our team of experts are passionate about making your vision a reality and delivering a final product that exceeds your expectations.`
}

const CDHero = () => {
  return (
    <>
    <HeroSection {...content} 
            overlayColorClass='bg-gradient-to-r from-purple-700/60 to-indigo-900/60 ' 
            action={<Button type="dashed" size='large'>Talk To Us</Button>} 
            />

    </>
  )
}

export default CDHero