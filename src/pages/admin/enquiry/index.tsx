import { api } from '@/utils/api'
import React from 'react'
import AdminPageHeader from '~/components/dashboard/AdminPageHeader'
import EnquiryTable from '~/components/enquiry/EnquiryTable'
import useQueryData from '~/lib/hooks/useQueryData'

const EnquiryPage = () => {
    const {paginate} = useQueryData();
    const {data: enquiries, isLoading, refetch} = api.enquiry.list.useQuery({paginate});
  return (
    <>
    <AdminPageHeader title="Enquiries"/>
    <div className="py-11 container mx-auto">
    {
        (enquiries && enquiries !== null) && <EnquiryTable data={enquiries.data} loading={isLoading} onDelete={id => void refetch()} paginationData={enquiries.meta}  />
    }
    </div>
    
    </>
  )
}

export default EnquiryPage