import React from 'react'
import ContactForm from '../ContactForm'
import EnquiryForm from '../enquiry/EnquiryForm'
import ManagmentEnquiry from '../enquiry/form-parts/ManagmentEnquiry'

const ConsEnquiryFormSection = () => {
  return (
    <div className="max-w-4xl px-5 py-10 mx-auto">
      <div className="grid grid-col-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
        <div className="aspect-4/3 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/assets/images/contact.webp)' }}></div>
        <div className="p-5 py-10 md:p-16 flex items-center">
          <EnquiryForm>
            <ManagmentEnquiry />
          </EnquiryForm>
        </div>
      </div>
    </div>
  )
}

export default ConsEnquiryFormSection