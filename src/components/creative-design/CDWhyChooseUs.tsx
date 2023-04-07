import React from 'react'
import WhyChooseUsSection from '../sections/WhyChooseUsSection'

const WhyChooseUsContent = [
    {
        title: 'Attention to Detail',
        desc: 'We pay close attention to every detail of your project, ensuring that the final product meets your exact specifications.'
    },
    {
        title: 'Cutting-Edge Technology',
        desc: 'We use the latest software and technology to deliver high-quality results that meet industry standards.'
    },
    {
        title: 'Quick Turnaround Time',
        desc: `We understand the importance of delivering projects on time, which is why we have a fast turnaround time.`
    },
    {
        title: 'Exceptional Customer Service',
        desc: 'We believe in providing exceptional customer service, which is why we have a dedicated team of professionals to assist you with your queries and concerns.'
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