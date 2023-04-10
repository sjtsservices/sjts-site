import React from 'react'
import { MdCall, MdEmail, MdLocationPin } from 'react-icons/md'

const content = {
    address: 'QQX5+4V6, New Jamdeeh Pandey Colony, Basti, Uttar Pradesh',
    phone: '+91 7007628038',
    email: 'info@aryanintl.com'
}


const ContactCard = ({title, data, icon}: {title: string, data: string, icon: any}) => {
    return (
        <div className='relative p-7 pt-11 shadow max-w-sm space-y-3 w-full text-center rounded-lg '>
          
            <h3 className='serif text-xl font-bold'>{title}</h3>
            <p>{data}</p>
          

            <div className='absolute w-full left-0 -top-1/2 flex justify-center'>
                <span className='inline-flex text-6xl bg-primary text-white items-center justify-center p-3 rounded-lg'>
                    {icon}
                </span>
            </div>
        </div>
    )
}

const ContactInfoSection = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-20'>
        <ContactCard title="Office Location" data={content.address} icon={<MdLocationPin/>}/>
        <ContactCard title="Give Us A Call" data={content.phone} icon={<MdCall/>}/>
        <ContactCard title="Send Us A Message" data={content.email} icon={<MdEmail/>}/>
    </div>
  )
}

export default ContactInfoSection