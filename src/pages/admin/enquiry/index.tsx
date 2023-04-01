import { api } from '@/utils/api'
import React from 'react'
import AdminPageHeader from '~/components/dashboard/AdminPageHeader'
import EnquiryList from '~/components/enquiry/EnquiryList'
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
        
        <>
        <EnquiryTable className='hidden md:block' data={enquiries?.data||[]} loading={isLoading} onDelete={id => void refetch()} paginationData={enquiries?.meta}  />
        <EnquiryList className="block md:hidden" enquiries={enquiries?.data||[]} loading={isLoading} />
        </>

    }
    </div>
    
    </>
  )
}

export default EnquiryPage