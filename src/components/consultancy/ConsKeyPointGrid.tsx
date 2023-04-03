import React from 'react'
import SectionTitle from '../SectionTitle'
import { nanoid } from 'nanoid'

const content = [
    {
        title: 'Strategic Planning',
        desc: 'Our consultants work with you to develop a clear and actionable strategic plan that aligns with your business objectives.',
    },
    {
        title: 'Market Research',
        desc: 'We conduct in-depth market research to help you understand your customers, competitors, and industry trends.'
    },
    {
        title: 'Financial Analysis',
        desc: 'We provide financial analysis and forecasting to help you make informed business decisions and optimize your financial performance.'
    },
    {
        title: 'Operational Improvement',
        desc: 'Our team can help you streamline your processes, reduce costs, and improve efficiency across your business.'
    },
    {
        title: 'Growth Strategies',
        desc: 'We work with you to identify growth opportunities and develop strategies to help you achieve your business goals.',
    },
]

const ConsKeyPointCard = (props: {title: string, desc: string, index: number}) => {
    return (
        <div className='p-5 shadow h-full'>
            <span className='text-4xl inline-block mb-3'>{props.index}.</span>
            <h2 className='text-xl'>{props.title}</h2>
            <p className='text-gray-500'>{props.desc}</p>
        </div>
    )
}

const ConsKeyPointGrid = () => {

  return (
    <div className='container mx-auto px-5 grid grid-cols-1 md:grid-cols-3  lg:grid-cols-3 gap-5 text-primary-dark'>
        <div className='flex items-center'>
            <SectionTitle title="How We Can Help" />
        </div>

        {
            content.map((c, idx) => {
                return <div key={nanoid()}>
                    <ConsKeyPointCard {...c} index={idx+1}/>
                </div>
            })
        }

    </div>
  )
}

export default ConsKeyPointGrid