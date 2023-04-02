import React from 'react'
import SectionTitle from '../SectionTitle'
import { nanoid } from 'nanoid'

const content = {
    image: '/assets/images/hr-services.webp',
    description: `We work with a wide range of industries to provide HR solutions that meet their unique needs. Whether you're in healthcare, IT, finance, or manufacturing, we have the experience and expertise to help you find the right talent and manage your workforce effectively. Some of the industries we serve include:`,
    industries: [
        'Healthcare and Life Sciences',
        'Information Technology',
        'Finance and Accounting',
        'Manufacturing and Engineering',
        'Hospitality and Tourism',
        'Retail and Consumer Goods',
        'Energy and Utilities',
        'Manufacturing',
        'Education and Training',
        'Energy and Utilities',
        'Transportation and Logistics',
        'Construction and Engineering',
        'Media and Communications',
        'Non-profit and Social Services',
        'Agriculture and Farming',
        'Pharmaceuticals',
        'Telecommunications'
    ]
}

const Industries = () => {
  return (
    <div className='container mx-auto px-5 text-primary-dark'>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10">
            <div className='bg-center bg-no-repeat bg-cover aspect-16/9 md:aspect-auto' style={{backgroundImage: `url(${content.image})`}}></div>
            <div className='py-10 max-w-2xl ' >
                <SectionTitle title="Industries We Serve"/>
                <p className='mt-5'>{content.description}</p>
            </div>
        </div>

        <div className="grid grid-cols-1 justify-items-start items-baseline md:grid-cols-3 lg:grid-cols-3 mt-10 ">
            {
                content.industries.map(i => {
                    return (
                        <div key={nanoid()} className='flex gap-5 items-baseline  px-4 py-2'>
                            <span className='w-2 h-2 bg-primary-dark rounded-full'></span>
                            <p className='text-lg font-bold'>{i}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Industries