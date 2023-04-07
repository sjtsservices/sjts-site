/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { CompanyEnquiry, CompanyEnquiryType, type Enquiry } from '@prisma/client'
import { type ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import React from 'react'
import AppTable, { type AppTableProps } from '../dashboard/AppTable'
import { type GameEventType } from '@/schema/GameEvent.schema';
import { Currency } from '@/utils/currency';
import { Tag } from 'antd';
import DeleteGameEvent from './OGDeleteButton';


export type EnquiryTableProps = {
    data: GameEventType[],
    onDelete?: (id: string) => void,
    
} & AppTableProps;


const OGTable = ({data,onDelete, ...rest}: EnquiryTableProps) => {

    const EnquiryTableColumns: ColumnsType<GameEventType> = [
        {
          key: 'enq_title',
          title: 'Title',
          dataIndex: 'title',
          fixed: 'left',
        },
        {
          key: 'enq_link',
          title: 'Link',
          dataIndex: 'link',
          render: (value: string, root) => {
            return <a className='overflow-ellipsis' href={value}>{value}</a>
          }
        },
        {
          key: 'enq_prize',
          title: 'Prize',
          dataIndex: 'prize',
          render: (value: number, root) => {
            return Currency.format(value)
          }
        },
        {
          key: 'enq_isExpired',
          title: 'Expired',
          dataIndex: 'expiredAt',
          render: (value: Date, root) => {
            return dayjs(value).isAfter(Date.now()) ? <Tag color="orange">Expired</Tag>:<Tag color="green">Opened</Tag>
          }
        },
        {
          key: 'enq_exp',
          title: 'Expired At',
          dataIndex: 'expiredAt',
          render: (value: any) => {
            return dayjs(value).format('DD-MM-YYYY hh:mm A')
          }
        },
        {
          key: 'enq_ecre',
          title: 'Created At',
          dataIndex: 'createdAt',
          render: (value: any) => {
            return dayjs(value).format('DD-MM-YYYY hh:mm A')
          }
        },
        {
          key: 'enq_action',
          title: 'Action',
          render: (value: any, root) => {
            return <div className='flex items-center justify-center'><DeleteGameEvent id={root.id} onDelete={onDelete} /></div>
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

export default OGTable