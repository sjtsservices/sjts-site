import React from 'react'
import HREnquiryForm from './HrEnquiryForm'
import {Card} from 'antd'
import SectionTitle from '../SectionTitle'

const HREnquirySection = () => {
  return (
    <Card className='container mx-auto'>
        <div className='grid grid-col-1 md:grid-cols-2 '>
        <div className='bg-center bg-cover bg-no-repeat aspect-16/9 md:aspect-auto' style={{backgroundImage: `url(${'/assets/images/hr-enquiry.jpg'})`}}></div>
        <div className='px-5 space-y-5'>
            <SectionTitle title='Raise An Enquiry'/>
            <HREnquiryForm/>
        </div>
    </div>
    </Card>
  )
}

export default HREnquirySection