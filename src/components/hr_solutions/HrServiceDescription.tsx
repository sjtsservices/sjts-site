import React from 'react'
import SectionTitle from '../SectionTitle'

const description = "Looking for a reliable partner to help you navigate the complexities of international hiring and employment? Our HR solutions are designed to provide you with a comprehensive, hassle-free experience, no matter where your business takes you. From recruitment and onboarding to payroll and compliance, we've got you covered.";
const ints = "We specialize in providing employment solutions for international companies and individuals. Our team of experts can help you with work visas, immigration procedures, and other legal requirements for working abroad. We also offer a range of services to ensure that your employees are supported throughout their international assignments, from cultural training to relocation assistance."
const HrServiceDescription = () => {

  return (
    <div className='container mx-auto text-primary-dark px-5'>
        <SectionTitle title='About Our Service' />
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 justify-items-center'>
            <div className='p-5 max-w-2xl'>
                <h2>Description</h2>
                <p>{description}</p>
            </div>
            <div className='p-5  max-w-2xl'>
                <h2>International Employment Services</h2>
                <p>{ints}</p>
            </div>
        </div>
    </div>
  )
}

export default HrServiceDescription