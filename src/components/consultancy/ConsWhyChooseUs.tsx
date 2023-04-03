import React from 'react'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'

const WhyChooseUsContent = [
    {
        title: 'Experienced Consultants',
        desc: 'Our team has years of experience in business consulting and a track record of success'
    },
    {
        title: 'Customized Solutions',
        desc: 'We tailor our solutions to fit your unique needs and objectives.'
    },
    {
        title: 'Collaborative Approach',
        desc: `We work closely with you to ensure that our solutions are aligned with your vision and goals.`
    },
    {
        title: 'Results-Oriented',
        desc: 'Our focus is always on delivering measurable results that help you achieve your business objectives.'
    },
    {
        title: 'Proven Methodologies',
        desc: 'We use proven methodologies and best practices to ensure that our solutions are effective and efficient.'
    },
    {
        title: 'Competitive Pricing',
        desc: 'Our services are competitively priced to provide you with the best value for your investment.'
    },
]

const ConsWhyChooseUs = () => {
  return (
    <WhyChooseUsSection content={WhyChooseUsContent} />
  )
}

export default ConsWhyChooseUs