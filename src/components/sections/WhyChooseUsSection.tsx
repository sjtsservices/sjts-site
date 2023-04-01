import { nanoid } from 'nanoid'
import React from 'react'
import SectionTitle from '../SectionTitle'


const WhyChooseUsContent = [
    {
        title: 'Extensive Industry Experience',
        desc: 'With decades of experience across a wide range of industries, SJTS Private Limited has the expertise and knowledge to deliver innovative solutions that drive results and exceed your expectations.'
    },
    {
        title: 'Cutting-Edge Technologies',
        desc: 'At SJTS Private Limited, we leverage the latest technologies and tools to develop innovative solutions that solve complex challenges, drive growth, and deliver measurable results'
    },
    {
        title: 'Customer-Centric Approach',
        desc: 'At SJTS Private Limited, we leverage the latest technologies and tools to develop innovative solutions that solve complex challenges, drive growth, and deliver measurable results'
    },
    {
        title: 'Global Delivery Model',
        desc: 'Our Onsite-Offsite-Offshore global delivery model ensures that we provide the best talent from around the world, giving you both quality and cost advantages at the same time.'
    },
    {
        title: 'Commitment to Quality',
        desc: 'At SJTS Private Limited, we are committed to delivering the highest quality solutions that meet your needs and exceed your expectations. Our rigorous quality control processes ensure that every solution we deliver is of the highest standard.'
    },
    {
        title: 'Value-Based Solutions',
        desc: 'Our focus on value-based solutions means that we always deliver solutions that meet your unique needs and provide real value to your organization. We believe in providing solutions that deliver measurable results and drive growth for your business.'
    },
]

const ReasonCard = ({title, desc, index}: {title: string, desc: string, index: number|string}) => {
    return (
        <div className="flex text-white py-4 gap-3">
            <div className="flex-grow-0"><span className='text-5xl'>{index}.</span></div>

            <div>
                <h3 className='text-xl font-bold'>{title}</h3>
                <p className='leading-relaxed'>{desc}</p>
            </div>
        </div>
    )
}

const WhyChooseUsSection = () => {

  return (
    <div className='py-20  bg-gradient-to-r from-[#120d50] to-[#0a0185]'>
        <div className="container px-5 mx-auto space-y-14">
            <SectionTitle title="Why Choose Us" name="Why Us" centerMode={true} darkMode={true}/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-5'>
                {
                    WhyChooseUsContent.map((content, index) => {
                        return (
                            <ReasonCard index={index+1} key={nanoid()} {...content}/>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUsSection