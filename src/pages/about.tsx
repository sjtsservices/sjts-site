import Head from 'next/head';
import React from 'react'
import { TbTargetArrow } from 'react-icons/tb';
import MetaTags from '~/components/MetaTags';
import PageHeader from '~/components/PageHeader'
import AboutUsSection from '~/components/sections/AboutUsSection'
import KeyPointSection from '~/components/sections/KeyPointSection'


const missionImage = '/assets/images/mission.webp';
const visionImage = '/assets/images/vision.webp';

const MVSection = ({ title, desc, isHighLight = false }: { title: string, desc: string, isHighLight?: boolean }) => {
    return (
        <div className={`${isHighLight ? 'text-white bg-primary' : 'bg-white'} flex p-5 gap-3 max-w-lg w-full shadow-2xl`}>
            <div className="flex-grow-0">
                <TbTargetArrow className={`${isHighLight ? '' : 'text-primary'} text-5xl `} />
            </div>

            <div className='space-y-2'>
                <h3 className='text-2xl serif'>{title}</h3>
                <p className='leading-relaxed'>{desc}</p>
            </div>
        </div>
    )
}

const AboutPage = () => {
    return (
        <>

            <Head>
                <MetaTags
                    title="About Us - Innovative Solutions for Your Business | Aryan Intl"
                    desc="Learn more about our company and how we provide innovative solutions for your business needs. We offer a range of services including management consulting, HR consulting, web and mobile app development, and more. Contact us today to see how we can help your business grow."
                    image="/assets/images/pages/aryanintl-about.webp"
                />
            </Head>
            <PageHeader title='About Us' />
            <div className="container pt-20 px-5 mx-auto">
                <KeyPointSection />
            </div>
            <div className="py-20 container mx-auto px-5">
                <AboutUsSection />
            </div>


            <section className='py-20 grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto px-5'>
                <div className="flex gap-5">
                    <div className="flex-grow-0">
                        <TbTargetArrow className={` text-5xl `} />
                    </div>

                    <div className='space-y-2'>
                        <h3 className='text-2xl serif'>Our Vision</h3>
                        <div>
                            <p className='leading-relaxed'>
                                At Aryan International LLC, we strive to be a leading global provider of technology, engineering, construction, print and electronic media, digital advertising, manufacturing, and financial services. Our vision is to develop world-class learning, governance, and empowerment systems that are value-based and responsive to the individual and social developmental needs of people, by bridging the digital divide.
                            </p>
                            <p className='leading-relaxed'>
                                We believe in preparing people for a knowledge-based economy and society by championing the cause of lifelong learning with a developmental orientation. Our goal is to stimulate the creation of world-class knowledge resources and provide universal access to them through information technology. We aim to bridge the digital divide and the resultant knowledge divide by offering top-notch IT solutions that are accessible and affordable to people from all walks of life.
                            </p>
                            <p className='leading-relaxed'>
                                To achieve this vision, we focus on three key pillars: process, performance, and people. We strive to simplify, strengthen, and transform businesses by partnering with our clients and ensuring the highest levels of certainty and satisfaction. Our comprehensive industry expertise and global network of innovation and delivery centers enable us to deliver high-quality IT services, digital and business solutions, and cost advantages to our clients.
                            </p>
                            <p className='leading-relaxed'>
                                Overall, our vision is to make a positive impact on the world by leveraging the power of technology and knowledge to improve the lives of people and communities around the globe.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='bg-center bg-no-repeat bg-cover aspect-square md:aspect-auto' style={{ backgroundImage: `url(${visionImage})` }}></div>
            </section>

            <section className='py-20'>
                <div className=' grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto bg-primary-dark text-white'>
                    <div className='bg-center bg-no-repeat bg-cover aspect-square md:aspect-auto' style={{ backgroundImage: `url(${missionImage})` }}></div>
                    <div className="flex gap-5 p-7">
                        <div className="flex-grow-0">
                            <TbTargetArrow className={` text-5xl text-white`} />
                        </div>

                        <div className='space-y-2'>
                            <h3 className='text-2xl serif'>Our Mission</h3>
                            <div>
                                <p className='leading-relaxed'>
                                    At Aryan International LLC, we strive to be a leading global provider of technology, engineering, construction, print and electronic media, digital advertising, manufacturing, and financial services. Our vision is to develop world-class learning, governance, and empowerment systems that are value-based and responsive to the individual and social developmental needs of people, by bridging the digital divide.
                                </p>
                                <p className='leading-relaxed'>
                                    We believe in preparing people for a knowledge-based economy and society by championing the cause of lifelong learning with a developmental orientation. Our goal is to stimulate the creation of world-class knowledge resources and provide universal access to them through information technology. We aim to bridge the digital divide and the resultant knowledge divide by offering top-notch IT solutions that are accessible and affordable to people from all walks of life.
                                </p>
                                <p className='leading-relaxed'>
                                    To achieve this vision, we focus on three key pillars: process, performance, and people. We strive to simplify, strengthen, and transform businesses by partnering with our clients and ensuring the highest levels of certainty and satisfaction. Our comprehensive industry expertise and global network of innovation and delivery centers enable us to deliver high-quality IT services, digital and business solutions, and cost advantages to our clients.
                                </p>
                                <p className='leading-relaxed'>
                                    Overall, our vision is to make a positive impact on the world by leveraging the power of technology and knowledge to improve the lives of people and communities around the globe.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage