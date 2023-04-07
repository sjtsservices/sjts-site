import React from 'react'
import ServiceCard, { type ServiceCardProps } from '../ServiceCard';
import {FaBookReader, FaGraduationCap} from 'react-icons/fa'
import {RiGovernmentFill} from 'react-icons/ri'
import {MdMail, MdMovie, MdWeb} from 'react-icons/md'
import { nanoid } from 'nanoid';
import SectionTitle from '../SectionTitle';

const ServiceSectionContent: ServiceCardProps[] =[
    {
        title: 'Management Consultancy',
        desc: 'Aryan International LLC provides high-quality education services that are designed to help you unlock your full potential. Our experienced teachers and tutors use innovative teaching methods to help you learn more effectively and achieve your goals.',
        icon: <FaBookReader/>,
        href: '/services/consultancy'
    },
    {
        title: 'Human Resource Consultancy',
        desc: 'Aryan International LLC provides high-quality education services that are designed to help you unlock your full potential. Our experienced teachers and tutors use innovative teaching methods to help you learn more effectively and achieve your goals.',
        icon: <FaBookReader/>,
        href: '/services/hr'
    },
    {
        title: 'e-Sport',
        desc: 'Aryan International LLC provides high-quality education services that are designed to help you unlock your full potential. Our experienced teachers and tutors use innovative teaching methods to help you learn more effectively and achieve your goals.',
        icon: <FaBookReader/>,
        href: '/services/e-sport'
    },
    {
        title: 'Education Service',
        desc: 'Aryan International LLC provides high-quality education services that are designed to help you unlock your full potential. Our experienced teachers and tutors use innovative teaching methods to help you learn more effectively and achieve your goals.',
        icon: <FaBookReader/>,
        href: '/services/education'
    },
    {
        title: 'Web & App Development',
        desc: `Aryan International LLC web development services can help you build a professional website that showcases your brand and helps you connect with your customers. Our team of experts will work with you to create a website that meets your needs and exceeds your expectations.`,
        icon: <MdWeb/>,
        href: '/services/web-development'
    },
    {
        title: 'Creative Design & Entertainment Services',
        desc: 'Aryan International LLC offers a wide range of entertainment services to help you relax, unwind, and have fun. From movies and TV shows to music and games, we’ve got you covered.',
        icon: <MdMovie/>,
        href: '/services/entertainment'
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