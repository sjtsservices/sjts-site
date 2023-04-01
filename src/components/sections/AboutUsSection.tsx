import { Button } from 'antd'
import { nanoid } from 'nanoid'
import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import SectionTitle from '../SectionTitle'

const aboutUsContent = {
    sectionImage: '/assets/images/about-img.webp',
    sectionName: 'About us',
    sectionTitle: 'About SJTS Private Limited',
    content: 'SJTS Private Limited is a global technology, engineering, construction, print and electronic media, digital advertising, manufacturing, and financial services conglomerate with a mission to develop world-class, value-based learning, governance, and empowerment systems that are responsive to the developmental needs of individuals and society. Our focus on process, performance, and people has enabled us to achieve our goals and establish a reputation as a leader in IT services, digital and business solutions worldwide.',
    keyPoints: [
        'Global Reach',
        'Customer Satisfaction',
        'Innovative Solutions',
        'Expertise and Experience'
    ]
}

const Kp = ({title}: {title: string}) => {
    return (
        <div className="flex gap-5 items-center mb-2 ">
            <span className='text-3xl text-primary inline-flex items-center'><AiFillCheckCircle/></span>
            <p className='text-lg font-bold '>{title}</p>
        </div>
    )
}


const AboutUsSection = () => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
        <div className="flex justify-center">
        <div className="aspect-4/3 max-w-md w-full bg-top bg-no-repeat bg-cover" style={{backgroundImage: `url(${aboutUsContent.sectionImage})`}}></div>
        </div>
        <div className='max-w-xl'>
            <SectionTitle title={aboutUsContent.sectionTitle} name={aboutUsContent.sectionName} />
            <p className='my-5'>
                {aboutUsContent.content}
            </p>
            {
                aboutUsContent.keyPoints.map(kp => {
                    return <Kp title={kp} key={nanoid()}/>
                })
            }

            <div className="mt-5"><Button type='primary' size='large'>More About Us</Button></div>
        </div>
    </div>
  )
}

export default AboutUsSection