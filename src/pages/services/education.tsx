import React from 'react'
import { Element } from 'react-scroll'
import EDContactSection from '~/components/education/EDContactSection'
import EDExamsSection from '~/components/education/EDExamsSection'
import EDHeroSection from '~/components/education/EDHeroSection'
import EDServices from '~/components/education/EDServices'
import EDWhyChooseUs from '~/components/education/EDWhyChooseUs'

export function getStaticProps() {
  return {
    props: {

    }
  }
}

const EducationPage = () => {
  return (
    <>
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