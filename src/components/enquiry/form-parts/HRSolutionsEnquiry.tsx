import { Form, Input, Select } from 'antd'
import { nanoid } from 'nanoid';
import React from 'react'

const industries = [
    'Healthcare and Life Sciences',
    'Information Technology',
    'Finance and Accounting',
    'Manufacturing and Engineering',
    'Hospitality and Tourism',
    'Retail and Consumer Goods',
    'Energy and Utilities',
    'Manufacturing',
    'Education and Training',
    'Energy and Utilities',
    'Transportation and Logistics',
    'Construction and Engineering',
    'Media and Communications',
    'Non-profit and Social Services',
    'Agriculture and Farming',
    'Pharmaceuticals',
    'Telecommunications'
];

const HRSolutionsEnquiry = () => {
  return (
    <>
    <Form.Item name="type" initialValue={'HR'} hidden>
                <Input/>
            </Form.Item>
            <Form.List name="data">
                {(fields) => {
                    return <>
                    <Form.Item name="industry" rules={[{ required: true, message: 'Industry is required' }]}>
                        <Select placeholder="Select the industry">
                            {
                                industries.map(value => {
                                    return <Select.Option value={value} key={nanoid()}>{value}</Select.Option>
                                })
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item name="jobName" rules={[{ required: true, message: 'Job Name is required' }]}>
                        <Input placeholder='Enter the job name' />
                    </Form.Item>
                    </>
                }}
            </Form.List>
    </>
  )
}

export default HRSolutionsEnquiry