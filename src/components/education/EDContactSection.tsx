import React from 'react'
import BaseContact from '../BaseContact'
import EnquiryForm from '../enquiry/EnquiryForm'
import EDEnquiryForm from '../enquiry/form-parts/EDEnquiry'

const EDContactSection = () => {
  return (
    <BaseContact image={'/assets/images/aryan-intl.webp'}>
        <EnquiryForm submitText='Send Query'>
            <EDEnquiryForm/>
        </EnquiryForm>
    </BaseContact>
  )
}

export default EDContactSection