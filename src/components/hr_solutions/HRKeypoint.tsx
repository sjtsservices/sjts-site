import { Card } from 'antd'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React from 'react'


type KeyPointCardProps = {
    title: string,
    description: string,
    image: string
}

const KeyPointCard = ({ title, description, image }: KeyPointCardProps) => {
    return (
        <Card className='max-w-xl'>
            <div className='flex gap-4'>
                <div className="flex-grow-0">
                    <div className='rounded overflow-hidden'>
                        <Image src={image} alt={title} width={50} height={50} />
                    </div>
                </div>
                <div className="flex-grow">
                    <h3 className='text-xl font-bold serif text-primary-dark'>{title}</h3>
                    <p className='text-gray-500'>{description}</p>
                </div>
            </div>
        </Card>
    )
}

const content: KeyPointCardProps[] = [
    {
        title: 'Expertise in HR Compliance',
        description: 'Our team of experienced HR professionals provide expert guidance and solutions to ensure that your organization remains compliant with all HR regulations and laws.',
        image: '/assets/icons/hr-kp-1.png'
    },
    {
        title: 'Effective Talent Management',
        description: 'We specialize in identifying, attracting, and retaining top talent to help your organization achieve its goals and succeed in a competitive job market.',
        image: '/assets/icons/hr-kp-2.png'
    },
    {
        title: 'Tailored HR Solutions',
        description: 'We offer customized HR solutions to fit your unique business needs and goals, from talent acquisition and onboarding to employee engagement and development.',
        image: '/assets/icons/hr-kp-3.png'
    }
]

const HRKeypoint = () => {

    return (
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-3 container mx-auto gap-5 text-primary-dark'>
            {
                content.map(c => {
                    return <KeyPointCard key={nanoid()} {...c}/>
                })
            }
        </div>
    )
}

export default HRKeypoint