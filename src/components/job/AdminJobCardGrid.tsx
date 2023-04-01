import { api } from '@/utils/api'
import { PlusOutlined } from '@ant-design/icons'
import { type Job } from '@prisma/client'
import { Button, Card, Result, Skeleton } from 'antd'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import React from 'react'
import useQueryData from '~/lib/hooks/useQueryData'
import { useToolbar } from '~/lib/hooks/useToolBar'
import AdminJobCard from './AdminJobCard'

export type AdminJobCardGridProps = {
    onDelete?: (job: Job) => void
}

export const skeletonCount = Array(4).fill(null);

const AdminJobCardGrid = ({ onDelete }: AdminJobCardGridProps) => {
    const { search, sort, paginate } = useQueryData();
    const { toolbarData, setToolbarData } = useToolbar({});
    const { data: jobs, isLoading, isError, error, refetch } = api.jobs.list.useQuery({ paginate, searchQuery: search, sort }, {
        refetchOnWindowFocus: false,
    })


    const handleDelete = (job: Job) => {
        // setLocalJobs(jobs => jobs.filter(j => j.id !== job.id));
        onDelete?.(job);
        void refetch();
    }


    if (isLoading) {
        return (
            <>
                <div className='container mx-auto px-5 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    {
                        skeletonCount.map(() => {
                            return (
                                <Card key={nanoid()}>
                                    <Skeleton avatar={{ shape: 'square' }} active />
                                </Card>
                            )
                        })
                    }
                </div>
            </>
        )
    }

    if (!isLoading && jobs &&  jobs?.data.length <= 0 ) {
        return (
            <Result title="No jobs is created" extra={<Link href="./jobs/create"><Button type="primary" icon={<PlusOutlined />}>Create new Job</Button></Link>} />
        )
    }



    return (
        <div className='container mx-auto gap-5 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                jobs && jobs.data.map(job => {
                    return <AdminJobCard job={job} key={nanoid()} onDelete={handleDelete} />
                })
            }
        </div>
    )
}

export default AdminJobCardGrid