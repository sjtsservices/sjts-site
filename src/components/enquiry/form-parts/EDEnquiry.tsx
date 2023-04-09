import { CompanyEnquiryType } from '@prisma/client';
import { Form, Input, Select } from 'antd'
import { nanoid } from 'nanoid';
import React from 'react'
import CountrySelectoInput from '~/components/inputs/CountrySlectorInput';

const preferredCountry = [
    'Australia',
    'United Kingdom',
    'USA',
    'Canada',
    'Ireland'
];

const EDEnquiryForm = () => {
    return (
        <>
            <Form.Item name="type" initialValue={CompanyEnquiryType.EDUCATION} hidden>
                <Input />
            </Form.Item>
            <Form.List name="data">
                {(fields) => {
                    return <>
                        <Form.Item name="cop" rules={[{ required: true, message: 'Country of passport required' }]}>
                            <CountrySelectoInput placeholder='Country of passport' />
                        </Form.Item>
                        <Form.Item name="ccl" rules={[{ required: true, message: 'Current Country is required'  }]}>
                            <CountrySelectoInput placeholder='Current Country' />
                        </Form.Item>
                        <Form.Item name="preferredCountry" rules={[{ required: true, message: 'Preferred Country is required' }]}>
                            <Select placeholder="Select the service">
                                {
                                    preferredCountry.map(value => {
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

export default EDEnquiryForm;
