import { Card } from 'antd'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React from 'react'


type KeyPointCardProps = {
    title: string,
}

const KeyPointCard = ({ title }: KeyPointCardProps) => {
    return (
        <Card className='max-w-xl'>
            <div className='flex gap-4'>
                <div className="flex-grow-0">
                    
                </div>
                <div className="flex-grow">
                    <h3 className='text-xl font-bold serif text-primary-dark'>{title}</h3>
                   
                </div>
            </div>
        </Card>
    )
}

const content: KeyPointCardProps[] = [
    {
        title: 'Business Set up',
    },
    {
        title: 'Investments',
    },
    {
        title: 'Gold Visa',
    },
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