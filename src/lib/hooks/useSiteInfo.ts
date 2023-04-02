import { useContext, useEffect } from 'react';
import { CompanyInfo, SiteContext } from '../providers/SiteProvider';

const defaultCompanyInfo: CompanyInfo = {
    name: 'Aryan International LLC',
    email: 'support@aryaninternational.com',
    phone: '7007628038',
    address: 'QQX5+4V6, New Jamdeeh Pandey Colony',
    city: 'Basti',
    state: 'Uttar Pradesh',
    country: 'India'
}
export function useSiteInfo(){
    const {info, setInfo} = useContext(SiteContext);

    useEffect(() => {
      if(!info) setInfo?.(defaultCompanyInfo);
    }, [])
    

    return {
        info,
        setInfo
    }
}