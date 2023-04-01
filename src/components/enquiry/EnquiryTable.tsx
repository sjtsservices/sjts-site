/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Enquiry } from '@prisma/client'
import { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import React from 'react'
import AppTable, { AppTableProps } from '../dashboard/AppTable'
import DeleteEnquiry from './DeleteEnquiry';
import EnquiryDetailDrawer from './EnquiryDetailDrawer';





export type EnquiryTableProps = {
    data: Enquiry[],
    onDelete?: (id: string) => void,
    
} & AppTableProps;

const EnquiryTable = ({data,onDelete, ...rest}: EnquiryTableProps) => {

    const EnquiryTableColumns: ColumnsType<Enquiry> = [
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
          key: 'enq_services',
          title: 'Service',
          dataIndex: 'service',
        },
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