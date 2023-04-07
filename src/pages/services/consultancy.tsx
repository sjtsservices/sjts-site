import React from 'react'
import { Element } from 'react-scroll'
import ConAboutServices from '~/components/consultancy/ConAboutServices'
import ConsEnquiryFormSection from '~/components/consultancy/ConsEnquiryFormSection'
import ConsHero from '~/components/consultancy/ConsHero'
import ConsKeyPointGrid from '~/components/consultancy/ConsKeyPointGrid'
import ConsWhyChooseUs from '~/components/consultancy/ConsWhyChooseUs'

const ManagmentConsultanyPage = () => {
  return (
    <>
    <ConsHero/>
    <div className="mt-10"><ConsKeyPointGrid/></div>
    <div className="mt-20"><ConAboutServices/></div>
    <div className="mt-20"><ConsWhyChooseUs/></div>
    <Element name='cs_form'><div className="mt-20"><ConsEnquiryFormSection/></div></Element>
    
    </>
  )
}

export default ManagmentConsultanyPage