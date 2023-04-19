import { api } from '@/utils/api'
import { Card } from 'antd';
import React from 'react'
import EnquiriesTabs from './EnquiriesTabs';

const RecentEnquiryWidget = () => {
    // const {data:enquiryData, isLoading}  = api.companyEnquiry.list.useQuery({});
  return (
    <Card title="Recent Enquiries">
        <EnquiriesTabs/>
    </Card>
  )
}

export default RecentEnquiryWidget