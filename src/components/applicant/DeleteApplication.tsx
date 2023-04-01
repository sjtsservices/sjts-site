import { api } from '@/utils/api'
import { DeleteOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import React, { PropsWithChildren } from 'react'

export type DeleteApplicationProps = {
    id: string,
    onDelete?: (id: string) => void
}

const DeleteApplication = ({id, onDelete, children}: PropsWithChildren<DeleteApplicationProps>) => {
    const deletMutation = api.application.delete.useMutation();

    const deleteApplication = async() => {
        try {
            const res = await deletMutation.mutateAsync({id});
            void onDelete?.(id);
            void message.success("Application delete successfully!")
        } catch (error) {
            void message.error("Deletion failed")
        }
    }
  return (
    <>
        {
            children ? <span onClick={() => void deleteApplication()}>{children}</span> : <Button disabled={deletMutation.isLoading} loading={deletMutation.isLoading} onClick={() => void deleteApplication()} danger icon={<DeleteOutlined/>}></Button>
        }
    </>
  )
}

export default DeleteApplication