import { useContext, useEffect } from 'react';
import {  SiteContext } from '../providers/SiteProvider';
import { SiteConfig } from '@prisma/client';

const defaultCompanyInfo = {

    email: 'support@aryaninternational.com',
    phone: '7007628038',
    address: 'QQX5+4V6, New Jamdeeh Pandey Colony',
    city: 'Basti',
    state: 'Uttar Pradesh',
    country: 'India',
    baseCur: 'INR',

    socialLinks: [
        {
            name: 'facebook',
            link: '#'
        },
        {
            name: 'twitter',
            link: '#'
        },
        {
            name: 'instagram',
            link: '#'
        },
        {
            name: 'linkedin',
            link: '#'
        },
        {
            name: 'dribbble',
            link: '#'
        },

    ]
}
export function useSiteInfo(){
    const {info, setInfo} = useContext(SiteContext);

    // useEffect(() => {
    //   if(!info) setInfo?.(defaultCompanyInfo);
    // }, [])
    

    return {
        info,
        setInfo
    }
}