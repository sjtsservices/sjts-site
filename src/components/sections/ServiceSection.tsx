import React from 'react'
import ServiceCard, { type ServiceCardProps } from '../ServiceCard';
import {FaBookReader, FaGraduationCap, FaHandsHelping} from 'react-icons/fa'
import {RiGovernmentFill} from 'react-icons/ri'
import {MdMail, MdMovie, MdWeb, MdWork} from 'react-icons/md'
import { nanoid } from 'nanoid';
import SectionTitle from '../SectionTitle';

const ServiceSectionContent: ServiceCardProps[] =[
    {
        title: 'Management Consultancy',
        desc: 'At Aryan Internation LLC, we provide expert management consultancy services to help businesses of all sizes optimize their operations and achieve their goals. Our experienced consultants offer personalized solutions to enhance efficiency, productivity, and profitability. Let us help your business thrive.',
        icon: <FaHandsHelping/>,
        href: '/services/consultancy'
    },
    {
        title: 'Human Resource Consultancy',
        desc: 'Aryan International LLC offers HR consultancy services to businesses of all sizes. We provide comprehensive solutions to help optimize HR processes, manage compliance and regulations, and enhance employee performance.',
        icon: <MdWork/>,
        href: '/services/hr'
    },
    {
        title: 'e-Sport',
        desc: `Aryan International LLC, E-Sport service offers online game event competitions with exciting rewards. Join our platform, compete with the best gamers, and win prizes. Get ready for the ultimate gaming experience with our expertly organized tournaments.`,
        icon: <FaBookReader/>,
        href: '/services/e-sport'
    },
    {
        title: 'Education Service',
        desc: 'Aryan International LLC helps students achieve their dream of studying in international colleges by providing comprehensive education services. Our experienced team guides students through the process of exam preparation, college applications, and scholarship opportunities to ensure a smooth transition into their desired program.',
        icon: <FaBookReader/>,
        href: '/services/education'
    },
    {
        title: 'Web & App Development',
        desc: `With our Web and App Development service, we help businesses and organizations create custom and functional websites and mobile applications. Our team of experienced developers work closely with clients to design, develop and deploy applications that meet their unique needs and help them achieve their goals.`,
        icon: <MdWeb/>,
        href: '/services/web-development'
    },
    {
        title: 'Creative Design & Entertainment Services',
        desc: 'Get high-quality graphic design and digital media services for your brand with Aryan International LLC. We offer logo design, video and photo editing, ad card design, and more to help you build a strong brand presence online.',
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