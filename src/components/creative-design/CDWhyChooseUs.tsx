import React from 'react'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'

const WhyChooseUsContent = [
    {
        title: 'Creative Design and Entertainment Experts',
        desc: 'Our team of experts are passionate about their work and strive to deliver exceptional results every time.'
    },
    {
        title: 'Customer-Focused Approach',
        desc: 'We take a customer-focused approach to all our projects, ensuring that your unique needs and requirements are met.'
    },
    {
        title: 'Customized Solutions',
        desc: `We understand that every project is unique and requires customized solutions. We work closely with our clients to deliver tailor-made solutions that meet their specific needs.`
    },
    {
        title: 'Affordable Prices',
        desc: 'We believe in delivering exceptional value for money, which is why we offer our services at highly competitive prices.'
    },
    {
        title: 'Experienced Professionals',
        desc: 'Our team consists of highly experienced professionals who have a deep understanding of the latest trends and techniques in graphic design and entertainment. They use their expertise to create visually stunning designs and videos that will captivate your audience.'
    },
    {
        title: 'Customized Solutions',
        desc: `We understand that every client has unique needs and requirements. That's why we offer customized solutions to ensure that your specific needs are met. We work closely with our clients to understand their goals and objectives, and create designs and videos that are tailored to their specific needs.`
    },
]

const CDWhyChooseUs = () => {
  return (
    <WhyChooseUsSection content={WhyChooseUsContent} />
  )
}

export default CDWhyChooseUs