import { api } from '@/utils/api'
import { CompanyEnquiryType } from '@prisma/client';
import { Tabs, TabsProps } from 'antd';
import React from 'react'
import EnquiriesLoader from '../EnquiriesLoader';

const MangmentEnquriesTab = () => {
    const items: TabsProps['items'] = [
        {
          key: CompanyEnquiryType.GENERAL,
          label: `General`,
          children: <EnquiriesLoader type={CompanyEnquiryType.GENERAL}/>,
        },
        {
          key: CompanyEnquiryType.MANAGMENT,
          label: `Managment`,
          children: <EnquiriesLoader type={CompanyEnquiryType.MANAGMENT}/>,
        },
        {
          key: CompanyEnquiryType.HR,
          label: `HR Consultancy`,
          children: <EnquiriesLoader type={CompanyEnquiryType.HR}/>,
        },
        
      ];
  return (
    <Tabs defaultActiveKey={CompanyEnquiryType.GENERAL} items={items} />
  )
}

export default MangmentEnquriesTab