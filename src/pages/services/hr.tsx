import Head from 'next/head'
import React from 'react'
import { Element } from 'react-scroll'
import MetaTags from '~/components/MetaTags'
import HREnquirySection from '~/components/hr_solutions/HREnquirySection'
import HRKeypoint from '~/components/hr_solutions/HRKeypoint'
import HeroSection from '~/components/hr_solutions/HeroSection'
import HrDivider from '~/components/hr_solutions/HrDivider'
import HrServiceDescription from '~/components/hr_solutions/HrServiceDescription'
import HrWhyChooseUs from '~/components/hr_solutions/HrWhyChooseUs'
import Industries from '~/components/hr_solutions/Industries'


export function getStaticProps() {
  return {
    props: {

    }
  }
}

const HRPage = () => {
  return (
    <>
    <Head>
      <MetaTags 
      title="Human Resources Consulting Services | Improve Your Business | Aryan Intl"
      desc="Our HR consulting services help improve your business by providing expert guidance on employee management, training, recruitment, and more. Boost your company's performance and success with our HR solutions."
      image = "/assets/images/pages/aryanintl-hr.webp"
      />
    </Head>
    <HeroSection/>
    <div className='mt-10'><HRKeypoint/></div>
    <div className='mt-20'><HrServiceDescription/></div>
    <div className='mt-20'><Industries/></div>
    <div className='mt-20'><HrDivider/></div>
    <div className=''><HrWhyChooseUs/></div>
    <Element name='hr_form'><div className='mt-20'><HREnquirySection/></div></Element>
    </>
  )
}

export default HRPage