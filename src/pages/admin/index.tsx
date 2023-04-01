import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import AdminPageHeader from '~/components/dashboard/AdminPageHeader'
import StickyBox from "react-sticky-box";

const AdminPage = () => {
  return (
    <>
      <StickyBox offsetTop={10}>
        <AdminPageHeader title="Dashboard" action={<Button type="primary" icon={<PlusOutlined />} >Create Job</Button>} />
      </StickyBox>
    </>
  )
}

export default AdminPage