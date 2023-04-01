import { api } from '@/utils/api';
import { Button, Result, Spin } from 'antd';
import AdminPageHeader from '~/components/dashboard/AdminPageHeader'
import { useRouter } from 'next/router'
import React, { useRef, useState } from 'react'
import StickyBox from 'react-sticky-box';
import { CheckOutlined } from '@ant-design/icons';
import MutateJobForm, { type HandleMutateJobForm } from '~/components/job/MutateJobForm';
import Link from 'next/link';


const MutateJobPage = () => {
    const router = useRouter();
    const [changed, setChanged] = useState(false);
    const [loading, setLoading] = useState(false);
    const mutateJobFormRef = useRef<HandleMutateJobForm>(null);
    const { data: job, isLoading, status } = api.jobs.single.useQuery({ id: router.query.id as string | undefined || '' });


    const handleSave = () => {
        void mutateJobFormRef.current?.save();
    }

    if (isLoading) {
        return <div className='w-full h-full flex items-center justify-center'><Spin /></div>
    }

    if (status === 'success' && !job) {
        return <Result status="404" subTitle="Job not found try other." />
    }

    return (
        <>
            <StickyBox offsetTop={0} className="z-10">
                <AdminPageHeader title="Edit Job" action={
                    <>
                        <Link href={`/admin/jobs`}><Button type="default" disabled={!job} >All Jobs</Button></Link>
                        <Button disabled={!changed || loading} loading={loading} onClick={handleSave} type="primary" icon={<CheckOutlined />} >Save</Button>
                    </>
                } />
            </StickyBox>
            <div className="mt-5 container mx-auto">
                <MutateJobForm data={job === null ? undefined : job} ref={mutateJobFormRef} onChange={() => setChanged(true)} onMutate={() => setChanged(false)} onLoading={loading => setLoading(loading)} />
            </div>

        </>
    )
}



export default MutateJobPage