import { Button } from 'antd';
import Link from 'next/link';
import React from 'react'
import ScrollTo from '../ScrollTo';

const ConsHero = () => {
    const heroImage = '/assets/images/consultancy_hero.webp';
    const title = 'The right people for your team';
    // const description = 'Our HR consultancy page provides customized solutions for all your HR needs. We offer a wide range of services including recruitment, talent management, employee engagement, performance management, and HR strategy development. With our expertise and experience, we ensure that your HR operations are efficient, effective and aligned with your business objectives. Let us help you build a strong and successful workforce.';
    const description = 'Get expert HR solutions for your business with our consultancy services. Our team of professionals provide customized HR solutions tailored to your unique needs. From recruitment and talent management to compliance and employee relations, we have got you covered';
    return (
        <>
        <div className='min-h-[calc(100vh-30px)] bg-center bg-no-repeat bg-cover flex items-center text-white relative' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="container mx-auto px-5  z-20 flex justify-center">
                <div className="max-w-xl text-center">
                    <div className="flex justify-center"><span className='bg-primary text-white px-3 py-2 mb-2'>Aryan International - Managment Consultancy</span></div>
                    <h1 className='text-5xl md:text-7xl serif  mb-3'>Transforming Businesses for<br></br><span className='text-primary'>SUCCESS</span></h1>
                    <p className='text-base leading-tight'>{description}</p>
                    <div className="flex justify-center mt-8">
                        <ScrollTo name='cs_form'><Button size="large" type="primary">Book Free Consultation</Button></ScrollTo>
                    </div>
                </div>
            </div>
            <div className="absolute w-full h-full left-0 top-0  bg-gradient-to-r from-purple-700/30 to-indigo-900/30"></div>
        </div>
        </>
    )
}

export default ConsHero