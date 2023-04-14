/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { type JobListItem } from '@/schema/Job.schema'
import { api } from '@/utils/api'
import { convertNullToUndefined } from '@/utils/convertNullToUndefiend'
import { type Job } from '@prisma/client'
import { Button, Modal, message } from 'antd'
import React from 'react'

export type ToggleJobStatusProps = {
    job?: Job|JobListItem,
    onToggle?: (job: Job) => void
}

const ToggleJobStatus = ({job, onToggle}: ToggleJobStatusProps) => {
    const updateMutation = api.jobs.update.useMutation();

    const toggleStatus = async () => {
        if(!job) return;

        try {
            const res = await updateMutation.mutateAsync(convertNullToUndefined({...job, published: !job.published}));
            if(res)onToggleSuccess(res);
            
        } catch (error) {
           void message.error("Something went wrong in publishing this job")
        }
    }

    const onToggleSuccess = (job: Job) => {
        onToggle?.(job);
        Modal.success({
            title: <h2 className='text-3xl'> Job {job.published?'Published': 'Unpublished'} Successfully!</h2>
        })
    }
  return (
    <>
    {
        (job && job.published ) ? <Button loading={updateMutation.isLoading} onClick={void toggleStatus} type="primary" >Unpublish</Button> :  <Button loading={updateMutation.isLoading} onClick={void toggleStatus} disabled={!job} type="primary" >Publish</Button>
    }
    </>
  )
}

export default ToggleJobStatus