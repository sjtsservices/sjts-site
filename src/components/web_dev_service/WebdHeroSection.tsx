import React from 'react'
import HeroSection from '../HeroSection'
import { Button } from 'antd'
import ScrollTo from '../ScrollTo'

const WebdHeroSection = () => {
    const heroImage = '/assets/images/webd-hero-bg.jpg'
  return (
    <HeroSection
    image={heroImage}
    title={<h1 className='text-4xl md:6xl'>Develop a powerful online presence</h1>}
    type="left"
    desc="Our team of expert web developers can help you create a website that not only looks great but also delivers results. We specialize in custom web development, ensuring that your website is tailored to your specific business needs."
    action={<><ScrollTo name="webd_form"><Button type="dashed" size="large">Get Quote</Button></ScrollTo></>}
    />
  )
}

export default WebdHeroSection