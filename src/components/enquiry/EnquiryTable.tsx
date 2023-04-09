/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { CompanyEnquiry, CompanyEnquiryType, type Enquiry } from '@prisma/client'
import { type ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import React from 'react'
import AppTable, { type AppTableProps } from '../dashboard/AppTable'
import DeleteEnquiry from './DeleteEnquiry';
import EnquiryDetailDrawer from './EnquiryDetailDrawer';


export type EnquiryTableProps = {
    data: CompanyEnquiry[],
    onDelete?: (id: string) => void,
    type?: CompanyEnquiryType
    
} & AppTableProps;

const extraC: {[key in CompanyEnquiryType]?: ColumnsType<CompanyEnquiry>} = {
  [CompanyEnquiryType.GENERAL]: [
    {
      key: 'enq_service',
      title: 'Service',
      dataIndex: 'service'
    },
  ],
  [CompanyEnquiryType.MANAGMENT]: [
    {
      key: 'enq_managment',
      title: 'Industries',
      dataIndex: 'data',
      render: (value) => {
        return value.industry
      }
    },
    
  ],
  [CompanyEnquiryType.HR]: [
    {
      key: 'enq_industry',
      title: 'Industries',
      dataIndex: 'data',
      render: (value) => {
        return value.industry
      }
    },
    {
      key: 'enq_job',
      title: 'Job Title',
      dataIndex: 'data',
      render: (value) => {
        return value.jobname
      }
    },
  ],
  [CompanyEnquiryType.DESIGN]: [
    {
      key: 'enq_managment',
      title: 'Industries',
      dataIndex: 'data',
      render: (value) => {
        return value.service
      }
    },
    
  ],
  [CompanyEnquiryType.EDUCATION]: [
    {
      key: 'enq_education',
      title: 'Passport Country',
      dataIndex: 'data',
      render: (value) => {
        return value.cop
      }
    },
    {
      key: 'enq_ccl',
      title: 'Current Country Location',
      dataIndex: 'data',
      render: (value) => {
        return value.ccl
      }
    },
    {
      key: 'enq_preferred',
      title: 'Preferred Country',
      dataIndex: 'data',
      render: (value) => {
        return value.preferredCountry
      }
    },
    
  ],

}

const EnquiryTable = ({data,onDelete, type, ...rest}: EnquiryTableProps) => {

    const extraColumns: ColumnsType<CompanyEnquiry> = (type && extraC[type])? extraC[type]||[] : [
      {
        key: 'enq_services',
        title: 'Service',
        dataIndex: 'service',
      }
    ]

    const EnquiryTableColumns: ColumnsType<CompanyEnquiry> = [
        {
          key: 'enq_name',
          title: 'Name',
          dataIndex: 'name',
          fixed: 'left',
          render: (value: any, root) => {
            return <div className='flex items-center justify-between'>
                <span className='inline-block'>{value}</span> 
                <EnquiryDetailDrawer enquiry={root}/>
                </div>
          }
        },
        {
          key: 'enq_email',
          title: 'Email',
          dataIndex: 'email'
        },
        {
          key: 'enq_phone',
          title: 'Phone',
          dataIndex: 'phone',
        },
        {
          key: 'enq_type',
          title: 'type',
          dataIndex: 'type',
        },
        ...extraColumns,
        {
          key: 'enq_date',
          title: 'Date',
          dataIndex: 'createdAt',
          render: (value: any) => {
            return dayjs(value).format('DD-MM-YYYY')
          }
        },
        {
          key: 'enq_action',
          title: 'Action',
          render: (value: any, root) => {
            return <div className='flex items-center justify-center'><DeleteEnquiry id={root.id} onDelete={onDelete} /></div>
          }
        },
      ]


  return (
    <AppTable
    {...rest}
    columns={EnquiryTableColumns}
    dataSource={(data || []).map(d => ({
        key: d.id,
        ...d
      }))}
    />
  )
}

export default EnquiryTable