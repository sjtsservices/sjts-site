import { type JobSeeker } from '@prisma/client';
import { Button,Modal } from 'antd';
import React, { type PropsWithChildren, useRef, useState } from 'react'
import CreateApplicant, { type HandleApplicantForm } from './CreateApplicant';

export type ApplyModalProps = {
    disabled?: boolean,
    jobId: string,
    afterApplied?: (applicant?: JobSeeker | undefined)=>void
}

const ApplyModal = ({children, disabled, jobId, afterApplied}: PropsWithChildren<ApplyModalProps>) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const formRef = useRef<HandleApplicantForm>(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        // console.log('closed with handleok')
        void formRef.current?.save().then(() => {
            setIsModalOpen(false);
        })
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            {
                children ? <span onClick={showModal} className='block '>{children}</span>: <Button type="primary" size="large" onClick={showModal} disabled={disabled}>
                Apply
            </Button>
            }
            <Modal title="Apply for job" open={isModalOpen} okText="Submit" onOk={handleOk} onCancel={handleCancel}>
                <CreateApplicant ref={formRef} jobId={jobId} onMutate={afterApplied}/>
            </Modal>
        </>
    );
}

export default ApplyModal