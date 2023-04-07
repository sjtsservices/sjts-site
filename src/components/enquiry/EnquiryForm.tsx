/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from '@/utils/api'
import { CompanyEnquiry } from '@prisma/client';
import { Button, Form, Input, Modal, message } from 'antd';
import React, { PropsWithChildren } from 'react'

export type EnquiryFormProps = {
    onMutate?: (enquiry: CompanyEnquiry) => void,

}

const EnquiryForm = ({ children, onMutate }: PropsWithChildren<EnquiryFormProps>) => {
    const [form] = Form.useForm();
    const createMutation = api.companyEnquiry.create.useMutation();

    const sendRequest = async () => {
        try {
            const validatedData = await form.validateFields();
            const res = await createMutation.mutateAsync(validatedData);
            if (res) {
                onMutate?.(res)
            }
            Modal.success({
                title: <h3>Your enquiry submitted successfully!</h3>,
                content: <p className="text-gray-500">Your enquiry has been successfully sent. Our team will get back to you as soon as possible. Thank you for your interest in our company.</p>

            });
            form.resetFields()
        } catch (error) {
            void message.error('Enquiry submission failed. Try again!');
        }
        // const validatedData = await form.validateFields();
        // console.log({validatedData})
    }
    return (
        <div className='w-full'>
            <Form
                layout='vertical'
                size='large'
                form={form}
            >
                <Form.Item name={'name'} rules={[{ required: true, message: 'Name is required' }]}>
                    <Input placeholder='Full Name' />
                </Form.Item>
                <Form.Item name={'email'} rules={[{ required: true, message: 'Email is required' }, { type: 'email', message: 'Enter valid email' }]}>
                    <Input placeholder='Email' />
                </Form.Item>
                <Form.Item name={'phone'} rules={[{ required: true, message: 'Phone is required' }]}>
                    <Input placeholder='Phone' />
                </Form.Item>
                {/* <Form.Item name={'data'} > */}
                    {
                        children
                    }
                {/* </Form.Item> */}
                <Form.Item name={'message'} rules={[{ required: true, message: 'Message is required' }]}>
                    <Input.TextArea className='h-56' placeholder='Tell something about subject' />
                </Form.Item>
            </Form>

            <div className="flex">
                <Button loading={createMutation.isLoading} disabled={createMutation.isLoading} type="primary" size='large' onClick={() => void sendRequest()}>Send Message</Button>
            </div>
        </div>
    )
}

export default EnquiryForm