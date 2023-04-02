import React from 'react'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'

const WhyChooseUsContent = [
    {
        title: 'Expertise',
        desc: 'Our team of experienced recruiters has a deep understanding of the job market and can match you with the best opportunities that align with your skills and career goals.'
    },
    {
        title: 'Global Reach',
        desc: 'We have a wide network of contacts across industries and countries, enabling us to connect you with job opportunities not just locally, but also internationally.'
    },
    {
        title: 'Personalized Service',
        desc: `We believe that each job seeker is unique, and that's why we take a personalized approach to each search, ensuring that we find the best job opportunities for you.`
    },
    {
        title: 'Global Delivery Model',
        desc: 'Our Onsite-Offsite-Offshore global delivery model ensures that we provide the best talent from around the world, giving you both quality and cost advantages at the same time.'
    },
    {
        title: 'Transparency',
        desc: 'We keep our candidates informed at every step of the recruitment process, providing regular updates on the status of their job applications.'
    },
    {
        title: 'Dedication',
        desc: 'Our team is dedicated to helping you succeed in your job search, and we go above and beyond to ensure that you are satisfied with the service we provide.'
    },
]

const HrWhyChooseUs = () => {
  return (
    <WhyChooseUsSection content={WhyChooseUsContent} />
  )
}

export default HrWhyChooseUs