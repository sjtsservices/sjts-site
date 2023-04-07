import React from 'react'
import { Element } from 'react-scroll'
import WebdEnquiryFormSection from '~/components/web_dev_service/WebdEnquiryFormSection'
import WebdHeroSection from '~/components/web_dev_service/WebdHeroSection'
import WebdKeyPointSection from '~/components/web_dev_service/WebdKeyPointSection'
import WebdWhyChooseUs from '~/components/web_dev_service/WebdWhyChooseUse'

const WebDevelopmentPage = () => {
    return (
        <>
            <WebdHeroSection />
            <div className='mt-10'><WebdKeyPointSection /></div>
            <div className='mt-20'><WebdWhyChooseUs/></div>
            <Element name="webd_form"><div className='mt-20'><WebdEnquiryFormSection/></div></Element>
        </>
    )
}

export default WebDevelopmentPage