import { CompanyEnquiryType } from '@prisma/client'
import React from 'react'
import EnquiryTable from './EnquiryTable'
import EnquiryList from './EnquiryList'
import useQueryData from '~/lib/hooks/useQueryData'
import { api } from '@/utils/api'

export type EnquiriesLoaderProps = {
    type?: CompanyEnquiryType
}

const EnquiriesLoader = ({
    type = undefined
}: EnquiriesLoaderProps) => {
    const { paginate } = useQueryData();
    const { data: enquiries, isLoading, refetch } = api.companyEnquiry.list.useQuery({ paginate, filter: {type} }, {refetchOnWindowFocus: false});
    return (
        <>
            <EnquiryTable className='hidden md:block' type={type} data={enquiries?.data || []} loading={isLoading} onDelete={id => void refetch()} paginationData={enquiries?.meta} />
            <EnquiryList className="block md:hidden"  enquiries={enquiries?.data || []} loading={isLoading} />
        </>
    )
}

export default EnquiriesLoader