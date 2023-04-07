import { Card } from 'antd'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React from 'react'
import SectionTitle from '../SectionTitle'


type CDServiceCardProps = {
    title: string,
    description: string,
    image: string
}

const CDServiceCard = ({ title, description, image }: CDServiceCardProps) => {
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

const content: CDServiceCardProps[] = [
    {
        title: 'Graphic Design',
        description: `Our experienced team of graphic designers will create eye-catching and effective designs that align with your brand's aesthetic and messaging. We specialize in creating stunning logos, brochures, flyers, business cards, and much more.`,
        image: '/assets/icons/graphic-design.png'
    },
    {
        title: 'Video Editing',
        description: `Our team is equipped with the latest software and technology to deliver exceptional video editing services for promotional videos, commercials, and other video content.We offer professional video editing services that will take your raw footage and turn it into a polished final product. From simple cuts and transitions to adding special effects and animations, we'll make sure your video looks its best.`,
        image: '/assets/icons/promotional-video.png'
    },
    {
        title: 'Promotional Video Making',
        description: `Our team of professionals is adept at producing promotional videos that convey your message in a visually stunning and impactful way. Want to create a promotional video that stands out from the rest? We'll work with you to develop a concept that captures your brand's unique voice and personality, and turn it into a video that will engage and inspire your audience.`,
        image: '/assets/icons/video-editing.png'
    },
    {
        title: 'Branding',
        description: `We provide complete branding services that include creating brand guidelines, designing logos, developing marketing collateral, and much more. Your brand is more than just a logo. We'll work with you to develop a complete branding strategy that includes your brand messaging, voice, tone, and visual identity, so you can stand out in a crowded marketplace.`,
        image: '/assets/icons/branding.png'
    },
]

const CDServices = () => {

    return (
        <>
        <div className="mb-10"><SectionTitle title="About Our Services"/></div>
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2 container mx-auto gap-5 text-primary-dark'>
            {
                content.map(c => {
                    return <CDServiceCard key={nanoid()} {...c}/>
                })
            }
        </div>
        </>
    )
}

export default CDServices