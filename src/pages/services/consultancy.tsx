import Head from 'next/head'
import React from 'react'
import { Element } from 'react-scroll'
import MetaTags from '~/components/MetaTags'
import ConAboutServices from '~/components/consultancy/ConAboutServices'
import ConsEnquiryFormSection from '~/components/consultancy/ConsEnquiryFormSection'
import ConsHero from '~/components/consultancy/ConsHero'
import ConsKeyPointGrid from '~/components/consultancy/ConsKeyPointGrid'
import ConsWhyChooseUs from '~/components/consultancy/ConsWhyChooseUs'

export function getStaticProps() {
  return {
    props: {

    }
  }
}

const ManagmentConsultanyPage = () => {
  return (
    <>
    <Head>
      <MetaTags 
      title="Expert Management Consultancy Services | Aryan Intl"
      desc="Get top-notch management consultancy services from Aryan Intl. Our expert consultants help businesses of all sizes achieve their goals and improve their operations. Contact us today to learn more."
      image = "/assets/images/pages/aryanintl-consultancy.webp"
      />
    </Head>
    <ConsHero/>
    <div className="mt-10"><ConsKeyPointGrid/></div>
    <div className="mt-20"><ConAboutServices/></div>
    <div className="mt-20"><ConsWhyChooseUs/></div>
    <Element name='cs_form'><div className="mt-20"><ConsEnquiryFormSection/></div></Element>
    
    </>
  )
}

export default ManagmentConsultanyPage