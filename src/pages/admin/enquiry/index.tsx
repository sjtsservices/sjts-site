import { api } from '@/utils/api'
import React from 'react'
import AdminPageHeader from '~/components/dashboard/AdminPageHeader'
import EnquiriesTabs from '~/components/enquiry/EnquiriesTabs'
import useQueryData from '~/lib/hooks/useQueryData'

const EnquiryPage = () => {
    const {paginate} = useQueryData();
    const {data: enquiries, isLoading, refetch} = api.companyEnquiry.list.useQuery({paginate});


  return (
    <>
    <AdminPageHeader title="Enquiries"/>
    <div className="py-11 container mx-auto">
    <EnquiriesTabs/>
    </div>
    
    </>
  )
}

export default EnquiryPage