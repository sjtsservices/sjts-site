/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type JobListItem } from '@/schema/Job.schema';
import { Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Link from 'next/link';
import React from 'react'
import AppTable, {type AppTableProps} from '../dashboard/AppTable';

const JobTableColumns: ColumnsType<any> = [
  {
    key: 'job_title',
    title: 'Title',
    dataIndex: 'title',
    render: (value: any, root: JobListItem) => {
      return <Link href={`/admin/jobs/${root.id}`} className="font-semibold hover:underline">{value}</Link>
    },
    fixed: 'left',
  },
  {
    key: 'job_type',
    title: 'Type',
    dataIndex: 'type'
  },
  {
    key: 'job_applicants',
    title: 'Applicants Count',
    dataIndex: '_count',
    render: (value: any) => {
      return value.applications
    }
  },
  // {
  //   key: 'job_view',
  //   title: 'Action',
  //   render: (value: any) => {
  //     return <Button >View</Button>
  //   }
  // }
]

export type JobTableProps = {jobs?: JobListItem[]} & AppTableProps;

const JobTable = (props: JobTableProps) => {
  return (
    <AppTable 
    {...props}
    columns={JobTableColumns}
    dataSource={(props.jobs || []).map(d => ({
        key: d.id,
        ...d
      }))}
      />
  )
}

export default JobTable