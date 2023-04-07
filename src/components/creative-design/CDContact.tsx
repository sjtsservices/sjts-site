import React from 'react'
import BaseContact from '../BaseContact'
import CDEnquiryForm from '../enquiry/form-parts/CDEnquiryForm'
import EnquiryForm from '../enquiry/EnquiryForm'


const CDContact = () => {
  return (
    <BaseContact>
        <EnquiryForm>
        <CDEnquiryForm/>
        </EnquiryForm>
    </BaseContact>
  )
}

export default CDContact