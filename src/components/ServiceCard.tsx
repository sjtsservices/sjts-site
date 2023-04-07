import Link from 'next/link'
import React from 'react'

export type ServiceCardProps = {
    icon: any, 
    title: string,
    desc: string,
    href?: string
}

const ServiceCard = ({icon, title, desc, href}: ServiceCardProps) => {
  return (
    <Link className='flex text-primary-dark ' href={href||''}>
      <div className='max-w-md w-full rounded-xl border-gray-200 border-solid border p-5 hover:border-gray-50 hover:shadow-xl transition-all duration-300 hover:bg-primary hover:text-white group'>
        <div className="flex items-center justify-center mb-3">
            <span className="inline-block text-8xl text-primary group-hover:text-white transition-all duration-300">{icon}</span>
        </div>

        <div className="space-y-2 text-center">
            <h3 className='text-xl serif'>{title}</h3>
            <p className='leading-relaxed'>{desc}</p>
        </div>
    </div>
    </Link>
  )
}

export default ServiceCard