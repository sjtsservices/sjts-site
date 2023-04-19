/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '@/utils/api'
import React from 'react'
import StatisticsCard from '../StatisticsCard';
import WidgetIcon from '../WidgetIcon';
import { FaGamepad } from 'react-icons/fa';

const OGCountCardWidgetCard = () => {
    const {data:countData, isLoading} = api.gameEvent.count.useQuery(undefined, {
        refetchOnWindowFocus: false,
    })
  return (
    <StatisticsCard 
    title="Total Game Events" 
    icon={<WidgetIcon icon={<FaGamepad/>} className='bg-primary/10 text-primary'/>}
    value={countData?.count||0}
    loading={isLoading}
    link="/admin/game-events"
    />
  )
}

export default OGCountCardWidgetCard