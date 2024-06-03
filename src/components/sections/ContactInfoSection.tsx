import React, { useContext } from 'react'
import { MdCall, MdEmail, MdLocationPin } from 'react-icons/md'
import { SiteContext } from '~/lib/providers/SiteProvider'

const content = {
    address: {
        india: 'QQX5+4V6, New Jamdeeh Pandey Colony, Basti, Uttar Pradesh',
        uae: 'Sharjah Media City(Shams) P.O Box 515000 Sharjah, UAE'
    },
    phone: {
        india: '+91 7007628038',
        uae: '+971 503077608',
    },
    email: 'info@aryanintl.com'
}


const ContactCard = ({title, data, icon}: {title: string, data: JSX.Element, icon: any}) => {
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
    const {info} = useContext(SiteContext)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center gap-20'>
        <ContactCard title="Office Location" data={<>{info?.address||content.address.uae} <br/>{content.address.india}</>} icon={<MdLocationPin/>}/>
        <ContactCard title="Give Us A Call" data={<>{content.phone.uae}<br />{content.phone.india}</>}  icon={<MdCall/>}/>
        <ContactCard title="Send Us A Message" data={<>{info?.email || content.email}</>} icon={<MdEmail/>}/>
    </div>
  )
}

export default ContactInfoSection