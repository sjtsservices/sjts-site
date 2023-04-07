import { api } from '@/utils/api';
import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react'
import AdminPageHeader from '~/components/dashboard/AdminPageHeader'
import OGTable from '~/components/online-gaming/OGTable';
import useQueryData from '~/lib/hooks/useQueryData';

const GameEventPage = () => {
  const {paginate} = useQueryData();
    const {data: events, isLoading, refetch} = api.gameEvent.list.useQuery({paginate, filter: {type: 'ALL'}});
  return (
    <>
    <AdminPageHeader title="Enquiries" action={<Button icon={<PlusOutlined/>}>Create Event</Button>}/>
    <div className="py-11 container mx-auto">
      <OGTable loading={isLoading} data={events?.data||[]} paginationData={events?.meta} />
    </div>
    </>
  )
}

export default GameEventPage