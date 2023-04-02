import { Button } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react'

const HeroSection = () => {
    const heroImage = '/assets/images/hr-hero.jpg';
    const title = 'The right people for your team';
    // const description = 'Our HR consultancy page provides customized solutions for all your HR needs. We offer a wide range of services including recruitment, talent management, employee engagement, performance management, and HR strategy development. With our expertise and experience, we ensure that your HR operations are efficient, effective and aligned with your business objectives. Let us help you build a strong and successful workforce.';
    const description = 'Get expert HR solutions for your business with our consultancy services. Our team of professionals provide customized HR solutions tailored to your unique needs. From recruitment and talent management to compliance and employee relations, we have got you covered';
    return (
        <>
        <div className='min-h-[calc(100vh-30px)] bg-center bg-no-repeat bg-cover flex items-center text-white relative' style={{ backgroundImage: `url(${heroImage})` }}>
            <div className="container mx-auto px-5  z-20">
                <div className="max-w-xl">
                    <div className="flex justify-start"><span className='bg-primary text-white px-3 py-2 mb-2'>Welcome To SJTS</span></div>
                    <h1 className='text-5xl md:text-6xl serif  mb-3'><span className='text-primary'>The Right People</span><br></br> For your Team</h1>
                    <p className='text-base leading-tight'>{description}</p>
                    <div className="flex justify-start mt-8">
                        <Link href="/contact"><Button size="large" type="primary">Raise A Query</Button></Link>
                    </div>
                </div>
            </div>
            <div className="absolute w-full h-full left-0 top-0  bg-gradient-to-r from-purple-700/30 to-indigo-900/30"></div>
        </div>
        </>
    )
}

export default HeroSection