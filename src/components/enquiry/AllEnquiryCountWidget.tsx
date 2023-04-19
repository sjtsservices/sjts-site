import { api } from '@/utils/api'
import React from 'react'
import StatisticsCard from '../StatisticsCard';
import WidgetIcon from '../WidgetIcon';
import { FaEnvelopeSquare } from 'react-icons/fa';

const AllEnquiryCountWidget = () => {
    const {data:countData, isLoading} = api.enquiry.count.useQuery(undefined, {
        refetchOnWindowFocus: false,
    })
  return (
    <StatisticsCard 
    title="All Enquiries" 
    icon={<WidgetIcon icon={<FaEnvelopeSquare/>} className='bg-primary/10 text-primary'/>}
    value={countData?.count||0}
    loading={isLoading}
    link="/admin/enquiry"
    />
  )
}

export default AllEnquiryCountWidget