
import { Button } from 'antd'
import React from 'react'
import StickyBox from "react-sticky-box";
import Link from 'next/link';

const AdminPage = () => {

  return (
    <>
      <StickyBox offsetTop={10}>
        {/* <AdminPageHeader title="Dashboard" action={<Button type="primary" icon={<PlusOutlined />} >Create Job</Button>} /> */}

        <div className='flex items-center justify-center min-h-screen '>
          <div className='flex items-center justify-center flex-col space-y-4'>
          <h1 className='text-4xl text-gray-500'>This page is comming soon...</h1>
          <Link href={'/admin/jobs'} className=""><Button>Go To Jobs</Button></Link>
          </div>
        </div>
      </StickyBox>
    </>
  )
}

export default AdminPage