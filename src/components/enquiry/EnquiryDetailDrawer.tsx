/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { EyeOutlined } from '@ant-design/icons'
import { CompanyEnquiry, Enquiry } from '@prisma/client'
import { Button, Card, Drawer, Tag } from 'antd'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import FullScreenLoader from '../FullScreenLoader'
import { useMediaQuery } from 'react-responsive'

export type EnquiryDetailDrawerProps = {
    enquiry?: CompanyEnquiry,
    loading?: boolean,
    onDelete?: (enquiry: Enquiry) => void
}


const EnquiryDetailDrawer = ({enquiry, loading, children, onDelete}: PropsWithChildren<EnquiryDetailDrawerProps>) => {
    const [isOpen, setIsOpen] = useState(false);
    const isTab = useMediaQuery({query: '(min-width: 768px)'})


    const open = () => {
        setIsOpen(true);
    }
    const onClose = () => {
        setIsOpen(false)
    }


    if(loading && !enquiry){
        return <FullScreenLoader/>
    }

  return (
    <>
    {
        children ? <span onClick={() => open()}>{children}</span> : <Button onClick={() => open()} icon={<EyeOutlined/>}></Button>
    }
    <Drawer open={isOpen} placement='right' width={isTab ? '60vw': '90vw'} onClose={onClose} >
        <Card className='w-full  '>
            <h2>{enquiry?.name}</h2>
            <p className='text-gray-500'>{enquiry?.email}</p>
            <p className='text-gray-500'>{enquiry?.phone}</p>
            <p className=''><Tag>{enquiry?.type}</Tag></p>

            <div className='my-5'>
                <p className='text-gray-600'>Message: </p>
                <p className='text-gray-700'>{enquiry?.message}</p>
            </div>
        </Card>
    </Drawer>
    </>
  )
}

export default EnquiryDetailDrawer