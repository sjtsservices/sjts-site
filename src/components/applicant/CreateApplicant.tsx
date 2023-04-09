/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type JobListItem } from '@/schema/Job.schema'
import { JobSeeker, type Job } from '@prisma/client'
import { api } from '@/utils/api'
import { Card, Form, Input, message, Modal, notification, Radio } from 'antd'
import React, { useEffect, useImperativeHandle } from 'react'
import CountrySelectoInput from '../inputs/CountrySlectorInput'
import StateInput from '../inputs/StateSelectorInput'
import CitySelectorInput from '../inputs/CitySelectorInput'
import { useAddress } from '~/lib/hooks/useAddress'
import saveApplicationLocally from '@/helpers/handleSubmissionLocally'
import { getJobSeeker, saveJobSeeker } from '@/helpers/handleJobseekerLocally'
import CVUploaderInput from '../inputs/CVUploaderInput'
import { TRPCClientError } from '@trpc/client'
import PhoneInput from '../inputs/PhoneInput'

export type HandleApplicantForm = {
    save: () => Promise<void>,
    reset: () => void
}

export type MutateApplicantFormProps = {
    jobId: string
    onChange?: (formData: any) => void,
    onMutate?: (applicant?: JobSeeker) => void,
    onLoading?: (isLoading: boolean) => void;
}




const CreateApplicant = React.forwardRef<HandleApplicantForm, MutateApplicantFormProps>((props, ref) => {
    const [form] = Form.useForm();
    const { country, state, setCountry, setState } = useAddress({ country: 'india' });
    const createApplicantMutation = api.jobSeekers.create.useMutation();

    const save = async () => {
        try {
            const validatedData = await form.validateFields();
            const res = await createApplicantMutation.mutateAsync({ ...validatedData });
            void message.success('Applied Successfully');
            props.onMutate?.(res);
            if (res) {
                saveJobSeeker(res);
                saveApplicationLocally(res.id, props.jobId);
                showWelcomModal();
            }
        } catch (error) {
            void message.error('Failed to apply');
            if(error instanceof TRPCClientError){
                if(error.shape && error.shape.message === 'already applied'){
                    showAlreadyAppliedModal();
                }else{
                    notification.error({message: error.shape.message});
                }
            }
        }
    }

    const handleFileUpload = (fileUrl: string) => {
        form.setFieldValue('cvUrl', fileUrl);
    }
    const handleFileUploadError = (error: any) => {
        void message.error("CV Upload failed");
        form.setFieldValue('cvUrl', { error })
    }

    const showWelcomModal = () => {
        Modal.success({
            title: <h2 className='text-green-700'>Thank You for Applying!</h2>,
            content: <div className=''>Thank you for submitting your application! Our team will review your qualifications and get back to you as soon as possible. In the meantime, feel free to check out our other job opportunities and stay connected with us on social media. We appreciate your interest in our company!</div>

        })
    }
    const showAlreadyAppliedModal = () => {
        Modal.error({
            title: <h2 className='text-red-700'>Oops, Something Went Wrong!</h2>,
            content: <div className=''>We appreciate your enthusiasm, but it seems you have already applied for this job. Please wait for our response, and we&apos;ll get back to you as soon as possible. Thank you for your interest in our company.</div>,
        })
    }

    useImperativeHandle(
        ref,
        () => {
            return {
                save,
                reset: form.resetFields
            }
        }
    )


    useEffect(() => {
        props.onLoading?.(createApplicantMutation.isLoading);
    }, [createApplicantMutation.isLoading])


    useEffect(() => {
        const localApplicant = getJobSeeker();
        if (localApplicant) {
            form.setFieldsValue(localApplicant);
        }
    }, [])

    useEffect(() => {
        form.setFieldValue('jobId', props.jobId);
    }, [props.jobId])


    return (
        <>
            <div className="max-w-4xl mx-auto">
                <Form
                    layout='vertical'
                    form={form}
                    onChange={props.onChange}
                >
                    <Form.Item name="jobId" hidden={true} label="Full Name" rules={[{ required: true, message: 'Jobid required' }]}>
                        <Input />
                    </Form.Item>
                    <Card>
                        <Form.Item name="name" label="Full Name" rules={[{ required: true, message: 'Full Name required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Email is required' }, { type: 'email', message: 'Invalid email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="phone" label="Phone" rules={[{ required: true, message: 'Phone is required' }]}>
                            <PhoneInput/>
                        </Form.Item>
                        <Form.Item name="cvUrl" label="CV Url">
                            <Input />
                        </Form.Item>
                        <div className="grid grid-cols-2 justify-items-center align-middle items-center">
                            <Form.Item name="category" label="Feature" initialValue={'GENERAL'}>
                                <Radio.Group optionType='button'>
                                    <Radio value={'PRIMIUM'}>Primary</Radio>
                                    <Radio value={'GENERAL'}>General</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <CVUploaderInput onUpload={handleFileUpload} onUploadError={handleFileUploadError} />
                        </div>

                        {/* ADDRESS INPUTS */}
                        <Form.Item name="address" label="Address" rules={[{ required: true, message: 'Address is required' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="country" label="Country" initialValue={'india'} rules={[{ required: true, message: 'Country is required' }]}>
                            <CountrySelectoInput onCountrySelect={setCountry} />
                        </Form.Item>
                        <Form.Item name="state" label="State" rules={[{ required: true, message: 'State is required' }]}>
                            <StateInput onStateSelect={setState} countryCode={country?.isoCode} />
                        </Form.Item>
                        <Form.Item name="city" label="City" rules={[{ required: true, message: 'City is required' }]}>
                            <CitySelectorInput stateCode={state?.isoCode} countryCode={country?.isoCode} />
                        </Form.Item>
                    </Card>
                </Form>
            </div>
        </>
    )
})

CreateApplicant.displayName = 'CreateApplicant';

export default CreateApplicant