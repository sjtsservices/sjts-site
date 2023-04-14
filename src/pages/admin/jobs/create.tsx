/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '@/utils/api'
import { CheckOutlined, TableOutlined } from '@ant-design/icons'
import { Job } from '@prisma/client'
import { Button } from 'antd'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import StickyBox from 'react-sticky-box'
import AdminPageHeader from '~/components/dashboard/AdminPageHeader'
import MutateJobForm, { type HandleMutateJobForm } from '~/components/job/MutateJobForm'
import ToggleJobStatus from '~/components/job/ToggleJobStatus'

const CreateJobPage = () => {
    const [changed, setChanged] = useState(false);
    const [loading, setLoading] = useState(false);
    const [recentCreatedJob, setRecentCreatedJob] = useState<Job>();
    const mutateJobFormRef = useRef<HandleMutateJobForm>(null);

    const handleSave = () => {
        void mutateJobFormRef.current?.save();
    }

    return (
        <>
            <StickyBox offsetTop={0} className="z-10">
                <AdminPageHeader title="Create Job" action={
                    <>
                        <Link href={`/admin/jobs`}><Button type="default" icon={<TableOutlined/>}></Button></Link>
                        <Button disabled={!changed || loading} loading={loading} onClick={handleSave} type="primary" icon={<CheckOutlined />} ><span className='hidden md:inline-block'>Save</span></Button>
                    </>
                } />
            </StickyBox>
            <div className="mt-5 container mx-auto ">
                <MutateJobForm ref={mutateJobFormRef} onChange={() => setChanged(true)} onMutate={() => setChanged(false)} onLoading={loading => setLoading(loading)}/>
            </div>
        </>
    )
}

export default CreateJobPage