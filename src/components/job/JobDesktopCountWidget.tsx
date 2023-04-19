import { api } from '@/utils/api'
import React from 'react'
import StatisticsCard from '../StatisticsCard';
import WidgetIcon from '../WidgetIcon';
import { FaSuitcase } from 'react-icons/fa';

const JobDesktopCountWidget = () => {
    const {data:countData, isLoading} = api.jobs.count.useQuery(undefined, {
        refetchOnWindowFocus: false,
    })
  return (
    <StatisticsCard 
    title="Total Jobs" 
    icon={<WidgetIcon icon={<FaSuitcase/>} className='bg-primary/10 text-primary'/>}
    value={countData?.count||0}
    loading={isLoading}
    link='/admin/jobs'
    />
  )
}

export default JobDesktopCountWidget