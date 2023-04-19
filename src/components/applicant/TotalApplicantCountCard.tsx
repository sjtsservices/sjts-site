/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '@/utils/api'
import React from 'react'
import StatisticsCard from '../StatisticsCard';
import WidgetIcon from '../WidgetIcon';
import { FaUserTie } from 'react-icons/fa';

const TotalApplicantCountCard = () => {
    const {data:countData, isLoading} = api.application.count.useQuery(undefined, {
        refetchOnWindowFocus: false,
    })
  return (
    <StatisticsCard 
    title="Total Job Submissions" 
    icon={<WidgetIcon icon={<FaUserTie/>} className='bg-primary/10 text-primary'/>}
    value={countData?.count||0}
    loading={isLoading}
    />
  )
}

export default TotalApplicantCountCard