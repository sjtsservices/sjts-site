
import React from 'react'
import { Element } from 'react-scroll'
import PageHead from '~/components/MetaTags'
import WebdEnquiryFormSection from '~/components/web_dev_service/WebdEnquiryFormSection'
import WebdHeroSection from '~/components/web_dev_service/WebdHeroSection'
import WebdKeyPointSection from '~/components/web_dev_service/WebdKeyPointSection'
import WebdWhyChooseUs from '~/components/web_dev_service/WebdWhyChooseUse'

export function getStaticProps() {
    return {
        props: {

        }
    }
}

const WebDevelopmentPage = () => {
    return (
        <>

            <PageHead
                title="Professional Web and Mobile App Development Services | Aryan Intl"
                desc="Looking for high-quality web and mobile app development services? Our experienced team can help you turn your ideas into reality. Contact us today to get started."
                image="/assets/images/pages/aryanintl-webdevelopment.webp"
            />

            <WebdHeroSection />
            <div className='mt-10'><WebdKeyPointSection /></div>
            <div className='mt-20'><WebdWhyChooseUs /></div>
            <Element name="webd_form"><div className='mt-20'><WebdEnquiryFormSection /></div></Element>
        </>
    )
}

export default WebDevelopmentPage