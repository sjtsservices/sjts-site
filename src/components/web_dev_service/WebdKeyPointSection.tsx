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
        title: 'Custom Web Development',
        description: 'Our team of web developers has expertise in developing custom websites from scratch. We ensure that your website is unique and tailored to your specific business needs.',
        image: '/assets/icons/custome-coding.png'
    },
    {
        title: 'Responsive Web Design',
        description: 'We create responsive websites that are optimized for all devices, including desktops, laptops, tablets, and smartphones.',
        image: '/assets/icons/resposive-design-icon.png'
    },
    {
        title: 'E-commerce Development',
        description: 'Our team has experience in developing e-commerce websites that are secure, easy to use, and optimized for sales.',
        image: '/assets/icons/ecommerce.png'
    },
    {
        title: 'Content Management Systems',
        description: 'We develop websites using popular content management systems such as WordPress, Drupal, and Joomla.',
        image: '/assets/icons/hr-kp-3.png'
    },
    {
        title: 'Web Application Development',
        description: 'We can help you develop web applications that are tailored to your specific business needs, including CRMs, ERPs, and more.',
        image: '/assets/icons/web-app.png'
    },
    {
        title: 'Website Maintenance and Support',
        description: 'We offer website maintenance and support services to ensure that your website runs smoothly and remains up-to-date.',
        image: '/assets/icons/website-maitenance.png'
    },
]

const WebdKeyPointSection = () => {

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

export default WebdKeyPointSection