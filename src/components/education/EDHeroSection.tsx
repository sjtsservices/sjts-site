import React from 'react'
import HeroSection from '../HeroSection'
import { Button } from 'antd'
import ScrollTo from '../ScrollTo'

const EDHeroSection = () => {
    const heroImage = '/assets/images/study-abroad-hero.webp'
  return (
    <HeroSection
    image={heroImage}
    title={<h1 className='text-4xl md:6xl'>Achieve Your Dream of <br></br> <span className="text-primary">Studying Abroad</span></h1>}
    type="left"
    desc="Our expert team is here to help you achieve your dream of studying at an international college. We offer comprehensive preparation courses for exams such as IELTS, GEE, TOEFL, CEITA, and TESL. Our experienced instructors will guide you through every step of the way, from exam preparation to scholarship applications. Let us help you unlock your potential and open doors to a bright future."
    action={<><ScrollTo name="ed_form"><Button type="dashed" size="large">Connect With Us</Button></ScrollTo></>}
    />
  )
}

export default EDHeroSection