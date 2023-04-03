import React from 'react'
import SectionTitle from '../SectionTitle'
import { Button } from 'antd'



const ConAboutServices = () => {
    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 '>
            <div className="p-5">
                <SectionTitle title='About Our Service' />
                <div className='my-5 leading-relaxed'>
                    <p>At Aryan International Consultancy, we provide a range of strategic services designed to help businesses achieve their goals and maximize profitability. Our experienced team of consultants works closely with clients to identify key challenges and opportunities and develop customized solutions that deliver measurable results.</p>
                    <p>We specialize in a variety of areas, including business strategy development, financial planning and analysis, organizational design and restructuring, operations optimization, marketing and sales strategy, and more. Our deep industry knowledge and proven methodologies enable us to deliver insights and recommendations that drive sustainable growth and enhance competitive advantage.</p>
                    <p>Whether you&apos;re a start-up looking to establish a foothold in your market or an established enterprise seeking to stay ahead of the curve, our team has the expertise and experience to help you succeed. Contact us today to learn more about how we can help you achieve your business objectives.</p>
                </div>

                <Button type="dashed" size='large'>Book Free Consultation</Button>
            </div>

            <div className='aspect-16/9 md:aspect-auto bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${'/assets/images/consultancy_about.webp'})` }}></div>
        </div>
    )
}

export default ConAboutServices