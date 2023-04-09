import React, { PropsWithChildren } from 'react'
import EnquiryForm from './enquiry/EnquiryForm'

export type BaseContactProps = {
  image?: string
}

const BaseContact = ({
  children,
  image= '/assets/images/contact.webp'
}: PropsWithChildren<BaseContactProps>) => {
  return (
    <div className="max-w-5xl px-5 py-10 mx-auto">
    <div className="grid grid-col-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
      <div className="aspect-4/3 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="p-5 py-10 md:p-16 flex items-center">
        {
            children ? children : <EnquiryForm/>
        }
      </div>
    </div>
  </div>
  )
}

export default BaseContact