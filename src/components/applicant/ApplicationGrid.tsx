import { api } from '@/utils/api'
import { PlusOutlined } from '@ant-design/icons'
import { type Job } from '@prisma/client'
import { Button, Card, Result, Skeleton } from 'antd'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import React from 'react'
import useQueryData from '~/lib/hooks/useQueryData'
import { useToolbar } from '~/lib/hooks/useToolBar'
import ApplicantCard from './ApplicantCard'

export type ApplicationGridProps = {
    jobId: string,
    onDelete?: (job: Job) => void,
    limit?: number
}

export const skeletonCount = Array(4).fill(null);

const ApplicationGrid = ({jobId, onDelete, limit }: ApplicationGridProps) => {
    const { search, sort, paginate } = useQueryData({paginate: {perPage: limit}});
    const { toolbarData, setToolbarData } = useToolbar();
    const { data: applications, isLoading, isError, error, refetch } = api.application.list.useQuery({jobId, paginate, searchQuery: search , sort }, {
        refetchOnWindowFocus: false,
    })

    const handleDelete = (job: Job) => {
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

    if (!isLoading && applications &&  applications?.data.length <= 0 ) {
        return (
            <Result title="No applications is created" extra={<Link href="./applications/create"><Button type="primary" icon={<PlusOutlined />}>Create new Job</Button></Link>} />
        )
    }



    return (
        <div className='container mx-auto gap-5 px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {
                applications && applications.data.map(apl => {
                    return <ApplicantCard application={apl} key={nanoid()}/>
                })
            }
        </div>
    )
}

export default ApplicationGrid