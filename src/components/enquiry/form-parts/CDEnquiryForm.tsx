import { CompanyEnquiryType } from '@prisma/client';
import { Form, Input, Select } from 'antd'
import { nanoid } from 'nanoid';
import React from 'react'

const industries = [
    'Graphic Design',
    'Branding',
    'Logo Design',
    'Video Editing',
    'Reels Making',
    'Promotional Video Making',
    'Website Design'
];

const CDEnquiryForm = () => {
    return (
        <>
            <Form.Item name="type" initialValue={CompanyEnquiryType.DESIGN} hidden>
                <Input />
            </Form.Item>
            <Form.List name="data">
                {(fields) => {
                    return <>
                        <Form.Item name="service" rules={[{ required: true, message: 'Service is required' }]}>
                            <Select placeholder="Select the service">
                                {
                                    industries.map(value => {
                                        return <Select.Option value={value} key={nanoid()}>{value}</Select.Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                    </>
                }}
            </Form.List>
        </>
    )
}

export default CDEnquiryForm