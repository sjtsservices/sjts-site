import React from 'react'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'

const WhyChooseUsContent = [
    {
        title: 'Experienced Team',
        desc: 'Our team of web developers has years of experience in developing websites for various industries.'
    },
    {
        title: 'Customized Solutions',
        desc: 'We offer customized web development solutions tailored to your business needs.'
    },
    {
        title: 'Timely Delivery',
        desc: `We understand the importance of timely delivery and ensure that we deliver projects on time.`
    },
    {
        title: 'Competitive Pricing',
        desc: 'We offer competitive pricing for our web development services, ensuring that you get the best value for your money.'
    },
    {
        title: 'Latest Technologies',
        desc: 'Our team of developers stay up-to-date with the latest web development technologies to ensure your website is built with the best tools available. From responsive design to complex databases, we have the expertise to bring your vision to life.'
    },
    {
        title: 'Customized Solutions',
        desc: 'We understand that every business has unique needs, which is why we offer customized web development solutions tailored to your specific requirements. We work closely with you to ensure that your website reflects your brand identity and provides an exceptional user experience for your customers.'
    },
]

const WebdWhyChooseUs = () => {
  return (
    <WhyChooseUsSection content={WhyChooseUsContent} />
  )
}

export default WebdWhyChooseUs