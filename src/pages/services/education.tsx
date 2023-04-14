import React from 'react'
import { Element } from 'react-scroll'
import Heade from 'next/head'
import EDContactSection from '~/components/education/EDContactSection'
import EDExamsSection from '~/components/education/EDExamsSection'
import EDHeroSection from '~/components/education/EDHeroSection'
import EDServices from '~/components/education/EDServices'
import EDWhyChooseUs from '~/components/education/EDWhyChooseUs'
import MetaTags from '~/components/MetaTags'
import PageHead from '~/components/MetaTags'

export function getStaticProps() {
  return {
    props: {

    }
  }
}

const EducationPage = () => {
  return (
    <>
    
      <PageHead
      title="International Education Consultancy | Exam Preparation, Admissions, Scholarships"
      desc="Prepare for international studies with our exam preparation and education consulting services. We help with application processes, scholarships, visas, and more. Contact us today for personalized support."
      image = "/assets/images/pages/aryanintl-education.webp"
      />
    
      <EDHeroSection />
      <div className='container mx-auto px-5 mt-20'><EDServices /></div>
      <div className='  mt-20'><EDWhyChooseUs /></div>
      <Element name="ed_form">
        <div className='  mt-20'><EDContactSection /></div>
      </Element>
      <div className='  mt-20'><EDExamsSection /></div>
      <div className="h-20"></div>
    </>
  )
}

export default EducationPage