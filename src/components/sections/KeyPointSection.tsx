import { nanoid } from 'nanoid'
import React from 'react'
import {FaAward, FaHandshake, FaServicestack} from 'react-icons/fa'


const KeyPointCard = ({title, desc, icon}: {title: string, desc: string, icon: any}) => {
    return (
        <div className='flex gap-2 max-w-lg'>
            <div className="flex-grow-0">
                <span className='text-5xl text-primary'>{icon}</span>
            </div>
            <div className="flex-grow">
                <h3 className='text-xl font-bold serif text-primary-dark'>{title}</h3>
                <p className='text-gray-500'>{desc}</p>
            </div>
        </div>
    )
}

const KeyPointSection = () => {
    const keyPoints = [
        {
            title: 'Advice & Guides',
            desc: 'Expert guidance to help you navigate complex issues and make informed decisions.',
            icon: <FaHandshake/>
        },
        {
            title: 'Great Solutions',
            desc: 'we specialize in delivering great solutions that meet your unique needs and exceed your expectations.',
            icon: <FaAward/>
        },
        {
            title: 'Comprehensive Services',
            desc: 'we offer a comprehensive suite of services to help you achieve your goals',
            icon: <FaServicestack/>
        },

    ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
        {
            keyPoints.map(value => {
                return <KeyPointCard {...value} key={nanoid()} />
            })
        }
    </div>
  )
}

export default KeyPointSection