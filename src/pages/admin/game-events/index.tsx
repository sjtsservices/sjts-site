import { api } from '@/utils/api';
import React from 'react'
import AdminPageHeader from '~/components/dashboard/AdminPageHeader'
import OGMutateModal from '~/components/online-gaming/OGMutateModal';
import OGTable from '~/components/online-gaming/OGTable';
import useQueryData from '~/lib/hooks/useQueryData';

const GameEventPage = () => {
  const {paginate} = useQueryData();
    const {data: events, isLoading, refetch} = api.gameEvent.list.useQuery({paginate, filter: {type: 'ALL'}});
  return (
    <>
    <AdminPageHeader title="Enquiries" action={<OGMutateModal onMutate={() => void refetch()}/>}/>
    <div className="py-11 container mx-auto">
      <OGTable onDelete={() => void refetch()} loading={isLoading} data={events?.data||[]} paginationData={events?.meta} />
    </div>
    </>
  )
}

export default GameEventPage