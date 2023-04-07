/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Form, Select, Input } from 'antd'
import { nanoid } from 'nanoid'
import React from 'react'

const servicesList: string[] = [
    'Managment Consultancy',
    'Human Resource Consultancy',
    'E-Sports',
    'Education Services',
    'Web & App Development',
    'Creative Design & Entertainment Services',
]


const GeneralEnquiry = () => {

    return (
        <>
            <Form.Item name="type" initialValue={'GENERAL'} hidden>
                <Input/>
            </Form.Item>
            <Form.List name="data">
                {(fields) => {
                    return <>
                    <Form.Item name="service" rules={[{ required: true, message: 'Service is required' }]}>
                        <Select>
                            {
                                servicesList.map(value => {
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

export default GeneralEnquiry