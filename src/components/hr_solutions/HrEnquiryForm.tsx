/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { api } from '@/utils/api';
import { Button, Form, Input, message, Modal, Select } from 'antd'
import React from 'react'

const HREnquiryForm = () => {
    const [form] = Form.useForm();
    const createMutation = api.enquiry.create.useMutation()

    const sendRequest = async () => {
        try {
            const validatedData = await form.validateFields();
            const res = await createMutation.mutateAsync(validatedData);
            Modal.success({
                title: <h3>Your enquiry submitted successfully!</h3>,
                content: <p className="text-gray-500">Your enquiry has been successfully sent. Our team will get back to you as soon as possible. Thank you for your interest in our company.</p>
                
            });
            form.resetFields();
        } catch (error) {
            void message.error('Submission failed')
        }
    }
  return (
    <div className='w-full'>
        <Form
        layout='vertical'
        size='large'
        form={form}
        >
            <Form.Item name={'name'} rules={[{required: true, message: 'Name is required'}]}>
                <Input placeholder='Full Name'/>
            </Form.Item>
            <Form.Item name={'email'} rules={[{required: true, message: 'Email is required'}, {type: 'email', message: 'Enter valid email'}]}>
                <Input placeholder='Email'/>
            </Form.Item>
            <Form.Item name={'phone'} rules={[{required: true, message: 'Phone is required'}]}>
                <Input placeholder='Phone'/>
            </Form.Item>
            <Form.Item name={'service'} rules={[{required: true, message: 'Service is required'}]}>
                <Select>
                    <Select.Option value="entertainment">Entertainment</Select.Option>
                    <Select.Option value="education">Education</Select.Option>
                    <Select.Option value="web-development">Web Development</Select.Option>
                    <Select.Option value="government">Governement</Select.Option>
                </Select>
            </Form.Item>
            <Form.Item name={'message'} rules={[{required: true, message: 'Message is required'}]}>
                <Input.TextArea className='h-56' placeholder='Tell something about subject'/>
            </Form.Item>
        </Form>

        <div className="flex">
            <Button loading={createMutation.isLoading} disabled={createMutation.isLoading} type="primary" size='large' onClick={() => void sendRequest()}>Send Message</Button>
        </div>
    </div>
  )
}

export default HREnquiryForm