/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'
import React, { useEffect } from 'react'
import StickyBox from 'react-sticky-box'
import AdminPageHeader from '~/components/dashboard/AdminPageHeader'
import AllJobs from '~/components/job/AllJobs'
import { useToolbar } from '~/lib/hooks/useToolBar'
import { SortData, ToolbarData } from '~/lib/providers/DashboardProvider'

const JobsPage = () => {
  const {toolbarData, setToolbarData} = useToolbar({
    sortData: [
      {
        lable: 'Newest',
        sortBy: 'createdAt',
        sortOrder: 'desc'
      },
      {
        lable: 'Oldest',
        sortBy: 'createdAt',
        sortOrder: 'asc'
      },
    ]
  });

  
  return (
    <>
      <StickyBox offsetTop={10}>
        <AdminPageHeader title="Jobs" action={<Link href="./jobs/create"><Button type="primary" icon={<PlusOutlined />} >Create Job</Button></Link>} />
      </StickyBox>
      <div className='container mx-auto mt-5'>
        <AllJobs />
      </div>
    </>
  )
}

export default JobsPage