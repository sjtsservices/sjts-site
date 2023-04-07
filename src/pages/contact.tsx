import Head from 'next/head'
import React from 'react'
import ContactForm from '~/components/ContactForm'
import PageHeader from '~/components/PageHeader'
import EnquiryForm from '~/components/enquiry/EnquiryForm'
import GeneralEnquiry from '~/components/enquiry/form-parts/GeneralEnquiry'
import ContactInfoSection from '~/components/sections/ContactInfoSection'
import MissionVisionSection from '~/components/sections/MissionVisionSection'



const Contact = () => {
    return (
        <>
        <Head>
        <title>SJTS: Your One-Stop Solution For All Your Needs</title>
        <meta name="description" content="Our company offers expert advice and great solutions for your needs. We pride ourselves on being a top choice for businesses and individuals looking for reliable, efficient services. With our commitment to excellence, you can trust us to deliver results. Explore our site today and discover why we're the right choice for you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            <PageHeader title='Contact Us' />

            <div className="container px-5 mx-auto py-20">
                <ContactInfoSection />
            </div>

            <div className="max-w-4xl px-5 py-10 mx-auto">
                <div className="grid grid-col-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
                    <div className="aspect-4/3 bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url(/assets/images/contact.webp)'}}></div>
                    <div className="p-5 py-10 md:p-16 flex items-center">
                        {/* <ContactForm/> */}
                        <EnquiryForm>
                            <GeneralEnquiry/>
                        </EnquiryForm>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <MissionVisionSection/>
            </div>
        </>
    )
}

export default Contact