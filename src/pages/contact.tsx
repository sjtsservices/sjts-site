import React from 'react'
import ContactForm from '~/components/ContactForm'
import PageHeader from '~/components/PageHeader'
import ContactInfoSection from '~/components/sections/ContactInfoSection'
import MissionVisionSection from '~/components/sections/MissionVisionSection'



const Contact = () => {
    return (
        <>
            <PageHeader title='Contact Us' />

            <div className="container px-5 mx-auto py-20">
                <ContactInfoSection />
            </div>

            <div className="max-w-4xl px-5 py-10 mx-auto">
                <div className="grid grid-col-1 md:grid-cols-2 shadow-lg rounded-lg overflow-hidden">
                    <div className="aspect-4/3 bg-center bg-cover bg-no-repeat" style={{backgroundImage: 'url(/assets/images/contact.webp)'}}></div>
                    <div className="p-5 py-10 md:p-16 flex items-center">
                        <ContactForm/>
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