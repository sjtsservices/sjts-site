/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type JobListItem } from '@/schema/Job.schema';
import { UserOutlined } from '@ant-design/icons';
import { JobSeeker } from '@prisma/client';
import { Avatar, Button } from 'antd';
import Link from 'next/link';
import React from 'react'
import AppTable, {type AppTableProps} from '../dashboard/AppTable';

const ApplicantTableColumns = [
  {
    key: 'app_image',
    title: '',
    dataIndex: 'image_url',
    render: (value: any, root: JobListItem) => {
      return <Avatar src={value} icon={<UserOutlined/>} />
    }
  },
  {
    key: 'app_name',
    title: 'Full Name',
    dataIndex: 'name',
    render: (value: any, root: JobListItem) => {
      return <Link href={`/admin/applicants/${root.id}`} className="font-semibold hover:underline">{value}</Link>
    }
  },
  {
    key: 'app_email',
    title: 'Email',
    dataIndex: 'email'
  },
  {
    key: 'app_phone',
    title: 'Phone',
    dataIndex: 'phone',
    render: (value: any) => {
      return <a className='text-gray-600 hover:underline ' href={`tel:${value}`}>{value}</a>
    }
  },
  {
    key: 'app_city',
    title: 'City',
    dataIndex: 'city',
  },
  {
    key: 'app_country',
    title: 'Country',
    dataIndex: 'country',
  },
]

export type ApplicantTableProps = {applicants?: JobSeeker[]} & AppTableProps;

const ApplicantTable = (props: ApplicantTableProps) => {
  return (
    <AppTable 
    {...props}
    columns={ApplicantTableColumns}
    dataSource={(props.applicants || []).map(d => ({
        key: d.id,
        ...d
      }))}
      />
  )
}

export default ApplicantTable