import { nanoid } from 'nanoid'
import React from 'react'
import { FaPassport, FaUniversity } from 'react-icons/fa'
import { MdLocationCity } from 'react-icons/md'
import { RiServiceLine } from 'react-icons/ri'


const content = [
    {
        title: 'Located in 15 Countries',
        desc: 'Our global reach means that we have a deep understanding of the education landscape in different countries, and can offer tailored services to suit your needs.',
        icon: <MdLocationCity/>
    },
    {
        title: 'End to End Services',
        desc: 'We provide a comprehensive range of services, from initial consultation to final visa application, so you can rest assured that you will be fully supported throughout your journey.',
        icon: <RiServiceLine/>
    },
    {
        title: '200+ Partner Institutions',
        desc: 'We have partnerships with over 750 leading institutions around the world, giving you access to a wide range of high-quality educational opportunities.',
        icon: <FaUniversity/>
    },
    {
        title: 'High Visa Success Rate',
        desc: 'Our track record speaks for itself. Our expert consultants have a high success rate in helping clients obtain their visas, ensuring that you can pursue your dreams without any unnecessary delays or obstacles.',
        icon: <FaPassport/>
    },
]


const ReasonCard = ({ title, desc, icon }: { title: string, desc: string, icon: any }) => {
    return (
        <div className='max-w-md w-full rounded-xl bg-orange-500 p-3 text-primary-dark'>
            <div className="flex items-center justify-center mb-3">
                <span className="inline-block text-8xl text-primary-dark">{icon}</span>
            </div>

            <div className="space-y-2 text-center">
                <h3 className='text-xl serif'>{title}</h3>
                <p className='leading-relaxed'>{desc}</p>
            </div>
        </div>
    )
}

const EDWhyChooseUs = () => {
    return (
        <div className='py-20  bg-gradient-to-r from-[#120d50] to-[#0a0185]'>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center pb-20">
                    <div >
                        <div className='text-white font-bold text-5xl md:text-7xl'>WHY</div>
                        <div className='text-white font-bold text-6xl md:text-9xl'>ARYAN Int.</div>
                    </div>
                </div>

                <div className="grid px-5 grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">
                    {
                        content.map(ct => {
                            return <ReasonCard {...ct} key={nanoid()} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default EDWhyChooseUs