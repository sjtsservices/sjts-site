import { api } from '@/utils/api'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import React, { PropsWithChildren } from 'react'

export type DeleteEnquiryProps = {
    id: string,
    onDelete?: (id: string) => void
}

const DeleteEnquiry = ({id, onDelete, children}: PropsWithChildren<DeleteEnquiryProps>) => {
    const deletMutation = api.enquiry.delete.useMutation();

    const deleteEnquiry = async() => {
        try {
            const res = await deletMutation.mutateAsync({id});
            void onDelete?.(id);
            void message.success("Enquiry delete successfully!")
        } catch (error) {
            void message.error("Deletion failed")
        }
    }
  return (
    <>
        {
            children ? <span onClick={() => void deleteEnquiry()}>{children}</span> : <Button disabled={deletMutation.isLoading} loading={deletMutation.isLoading} onClick={() => void deleteEnquiry()} danger icon={<DeleteOutlined/>}></Button>
        }
    </>
  )
}

export default DeleteEnquiry