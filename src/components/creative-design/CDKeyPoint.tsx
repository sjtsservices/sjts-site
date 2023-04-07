import React from 'react'
import SectionTitle from '../SectionTitle'
import { nanoid } from 'nanoid'

const content = [
    {
        title: `Attention to Detail`,
        desc: `We pay close attention to every detail of your project, ensuring that the final product meets your exact specifications.`
    },
    {
        title: `Cutting-Edge Technology`,
        desc: `We use the latest software and technology to deliver high-quality results that meet industry standards.`
    },
    {
        title: `Quick Turnaround Time`,
        desc: `We understand the importance of delivering projects on time, which is why we have a fast turnaround time.`
    },
    {
        title: `Exceptional Customer Service`,
        desc: `We believe in providing exceptional customer service, which is why we have a dedicated team of professionals to assist you with your queries and concerns.`
    },
]

const CDKeyPointCard = (props: {title: string, desc: string, index: number}) => {
    return (
        <div className='p-5 shadow h-full'>
            <span className='text-4xl inline-block mb-3'>{props.index}.</span>
            <h2 className='text-xl'>{props.title}</h2>
            <p className='text-gray-500'>{props.desc}</p>
        </div>
    )
}

const CDKeyPoint = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 text-primary-dark'>
        <div className="">
            <SectionTitle title="Our Key Points" />
        </div>

        <div className=" col-auto md:col-start-2 md:col-end-4  ">
            <p className='text-lg tracking-wider'>{`At Aryan International LLC, we stand out from the crowd with our exceptional services and commitment to delivering exceptional value to our clients. Some of our key points include:`}</p>

            <div className="mt-5 grid grid-cols-1 gap-5 justify-items-center md:grid-cols-2 xl:grid-cols-2">
                {
                    content.map((val, index) => {
                        return <CDKeyPointCard key={nanoid()} {...val} index={index+1} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default CDKeyPoint