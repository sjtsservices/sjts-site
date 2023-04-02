import { Button } from 'antd';
import Link from 'next/link';
import React from 'react'

const HeroSection = () => {
    const heroImage = '/assets/images/hero-img.webp';
  return (
    <div className='min-h-[calc(100vh-30px)] bg-center bg-no-repeat bg-cover flex items-center text-white relative' style={{backgroundImage: `url(${heroImage})`}}>
        <div className="container mx-auto px-5 max-w-2xl z-20">
            <div className="flex justify-center"><span className='bg-primary text-white px-3 py-2 mb-2'>Welcome To Aryan International</span></div>
            <h1 className='text-5xl md:text-6xl serif text-center mb-3'>Your One-Stop Solution For All Your Needs</h1>
            <p className='text-center'>Providing education, study abroad opportunities, entertainment, web development, government services and advertising services. A private limited company that is committed to delivering quality services to its clients. Your one-stop-shop for all your needs.</p>
            <div className="flex justify-center mt-8">
              <Link href="/contact"><Button size="large" type="primary">Contact Us</Button></Link>
            </div>
        </div>
        <div className="absolute w-full h-full left-0 top-0  bg-gradient-to-r from-purple-700/60 to-indigo-900/60"></div>
    </div>
  )
}

export default HeroSection