import React from 'react'
import ServiceCard, { type ServiceCardProps } from '../ServiceCard';
import {FaBookReader, FaGraduationCap} from 'react-icons/fa'
import {RiGovernmentFill} from 'react-icons/ri'
import {MdMail, MdMovie, MdWeb} from 'react-icons/md'
import { nanoid } from 'nanoid';
import SectionTitle from '../SectionTitle';

const ServiceSectionContent: ServiceCardProps[] =[
    {
        title: 'Education Service',
        desc: 'SJTS Private Limited provides high-quality education services that are designed to help you unlock your full potential. Our experienced teachers and tutors use innovative teaching methods to help you learn more effectively and achieve your goals.',
        icon: <FaBookReader/>
    },
    {
        title: 'Web Development',
        desc: `SJTS Private Limited’s web development services can help you build a professional website that showcases your brand and helps you connect with your customers. Our team of experts will work with you to create a website that meets your needs and exceeds your expectations.`,
        icon: <MdWeb/>
    },
    {
        title: 'Marketing',
        desc: 'SJTS Private Limited’s advertising services can help you reach new customers and grow your business. Our team of marketing experts will work with you to create a customized advertising strategy that meets your needs and helps you achieve your goals.',
        icon: <MdMail/>
    },
    {
        title: 'Study Abroad',
        desc: 'SJTS Private Limited’s study abroad programs offer students the opportunity to explore new cultures, learn new languages, and gain valuable international experience. Our programs are designed to help students grow both personally and professionally.',
        icon: <FaGraduationCap/>
    },
    {
        title: 'Government Services',
        desc: 'SJTS Private Limited provides high-quality education services that are designed to help you unlock your full potential. Our experienced teachers and tutors use innovative teaching methods to help you learn more effectively and achieve your goals.',
        icon: <RiGovernmentFill/>
    },
    {
        title: 'Entertainment Services',
        desc: 'SJTS Private Limited offers a wide range of entertainment services to help you relax, unwind, and have fun. From movies and TV shows to music and games, we’ve got you covered.',
        icon: <MdMovie/>
    },
]

const ServiceSection = () => {
  return (
    <div className='mx-auto'>
        <div className="mb-10"><SectionTitle title="What Service We Offer" name="Our Services" centerMode={true}/></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
        {
            ServiceSectionContent.map(svc => {
                return (
                    <ServiceCard key={nanoid()} {...svc} />
                )
            })
        }
    </div>
    </div>
  )
}

export default ServiceSection