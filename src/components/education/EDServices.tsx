import { Button, Card } from 'antd'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import React from 'react'

export type EDServiceCardProps = {
    title: string,
    desc: string,
    href?: string
}

const contents = [
    {
        title: 'Education Counselling',
        desc: 'Our experienced consultants provide personalized education counseling to guide you through the exam preparation and admission process for international colleges.',
        href: '#'
    },
    {
        title: 'Application Process',
        desc: 'We assist you in completing the application process with accuracy and ease, ensuring that you meet all the requirements for admission.',
        href: '#'
    },
    {
        title: 'Scholarship Guidance',
        desc: 'Our team provides guidance on available scholarships and financial aid opportunities, helping you to achieve your academic goals without financial worries.',
        href: '#'
    },
    {
        title: 'Visa Application',
        desc: 'We offer visa application assistance, ensuring that you have all the necessary documents and information to apply for a student visa.',
        href: '#'
    },
    {
        title: 'Student Health Insurance',
        desc: 'We help you navigate through the complex health insurance options and choose the best coverage to meet your needs.',
        href: '#'
    },
    {
        title: 'Student Accommodation',
        desc: 'We help you find the best and most affordable accommodation options close to your university, ensuring a comfortable stay during your academic journey.',
        href: '#'
    },
]

const EDServiceCard = ({ title, desc, href }: EDServiceCardProps) => {
    return (
        <Link className='flex text-primary-dark ' href={href || ''}>
            <div className='max-w-md w-full relative rounded-xl border-gray-200 border-solid border p-5 hover:border-gray-50 hover:shadow-xl transition-all duration-200 hover:bg-primary hover:text-white '>

                <div className="space-y-2">
                    <h3 className='text-xl serif'>{title}</h3>
                    <p className='leading-relaxed'>{desc}</p>
                </div>

                {/* <div className="absolute left-0 bottom-0 w-full">
                    <Button type="primary" size='large' >Learn More</Button>
                </div> */}
            </div>
        </Link>
    )
}


const EDServices = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    contents.map(ct => {
                        return <EDServiceCard key={nanoid()} {...ct} />
                    })
                }
            </div>
        </>
    )
}

export default EDServices