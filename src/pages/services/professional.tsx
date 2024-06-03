
import React from 'react'
import { Element } from 'react-scroll'
import PageHead from '~/components/MetaTags'
import HREnquirySection from '~/components/hr_solutions/HREnquirySection'
import HRKeypoint from '~/components/professional/KeyPoint'
import HeroSection from '~/components/professional/ProfessionalSection'
import HrDivider from '~/components/hr_solutions/HrDivider'
import HrServiceDescription from '~/components/professional/ProfessionalDescription'
import HrWhyChooseUs from '~/components/hr_solutions/HrWhyChooseUs'
import Industries from '~/components/hr_solutions/Industries'


export function getStaticProps() {
  return {
    props: {

    }
  }
}

const Professional = () => {
  return (
    <>
 
      <PageHead
      title="Business Set up | Investments | Gold Visa | Aryan Intl"
      desc="Formation, registration, and structural arrangements for companies in various business activities.Incorporation of offshore companies for diverse business opportunities without needing a physical office."
      image = "/assets/images/pages/aryanintl-hr.webp"
      />

    <HeroSection/>
    
    <div className='mt-10'><HRKeypoint/></div>
    <div className='mt-20'><HrServiceDescription/></div>
    <div className=''><HrWhyChooseUs/></div>
    <Element name='hr_form'><div className='mt-20'><HREnquirySection/></div></Element>
    </>
  )
}

export default Professional