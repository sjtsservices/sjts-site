/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteOutlined } from '@ant-design/icons'
import { Job } from '@prisma/client'
import { Button, message, Modal } from 'antd'
import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { useJobMutation } from '~/lib/hooks/useJobMutation'

export type DeleteJobProps = {
    onDelete?: (job: Job) => void,
    jobId: string,
}

const DeleteJob = ({jobId, onDelete, children}: PropsWithChildren<DeleteJobProps>) => {
    const {deleteMutation} = useJobMutation();

    const deleteJob = async () => {
        try {
            const res = await deleteMutation.mutateAsync({id: jobId});
            void message.success("Delete successfully!");
            if(res)onDelete?.(res);
        } catch (error) {
            void message.error("Unable to delete this job!");
        }
    }

    const confirmDeletion = () => {
        if(deleteMutation.isLoading) return;
        Modal.error({
            title: 'Are you Sure?',
            content: <div className='text-gray-600'>Are you sure to delete this job?</div>,
            onOk: deleteJob
        })
    }

    // const DynamicElement = children ? React.cloneElement(children as any, {onClick: () => deleteJob()}) : undefined;
  return (
    <>
        {
            children ? React.cloneElement(children as any, {onClick: () => confirmDeletion()}) : <Button onClick={confirmDeletion} disabled={deleteMutation.isLoading} loading={deleteMutation.isLoading} icon={<DeleteOutlined/>} danger>Delete</Button>
        }
    </>
  )
}

export default DeleteJob