
import { CompanyEnquiryType } from '@prisma/client';
import { Tabs, type TabsProps } from 'antd';
import React from 'react'
import EnquiriesLoader from './EnquiriesLoader';

const EnquiriesTabs = () => {
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
        {
          key: CompanyEnquiryType.DESIGN,
          label: `Grahic Design & Media`,
          children: <EnquiriesLoader type={CompanyEnquiryType.DESIGN}/>,
        },
        
      ];
  return (
    <Tabs defaultActiveKey={CompanyEnquiryType.GENERAL} items={items} />
  )
}

export default EnquiriesTabs