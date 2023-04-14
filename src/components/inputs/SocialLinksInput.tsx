import { DribbbleOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MinusCircleOutlined, PlusOutlined, TwitterOutlined } from '@ant-design/icons'
import { Button, Form, Input, Select } from 'antd'
import { nanoid } from 'nanoid'
import React from 'react'

export const SocialSiteNames: { name: string, icon: any }[] = [
    { name: 'facebook', icon: <FacebookOutlined /> },
    { name: 'linkedin', icon: <LinkedinOutlined /> },
    { name: 'twitter', icon: <TwitterOutlined /> },
    { name: 'dribbble', icon: <DribbbleOutlined /> },
    { name: 'instagram', icon: <InstagramOutlined /> },
]

const SocialLinksInput = () => {
    return (
        <Form.List name="socialLinks">
            {(fields, { add, remove }) => (
                <>
                    {fields.map(({ key, name, ...restField }) => (
                        <div className='flex items-baseline gap-3 mb-2 ' key={key} >
                            <Form.Item
                                {...restField}
                                name={[name, 'name']}
                                rules={[{ required: true, message: 'Missing link name' }]}
                            >
                                <Select >
                                    {
                                        SocialSiteNames.map(sc => {
                                            return <Select.Option key={nanoid()} value={sc.name}> <span>{sc.icon} <span className='hidden md:inline-block capitalize'>{sc.name}</span ></span></Select.Option>
                                        })
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item
                                style={{ width: '100%' }}
                                {...restField}
                                name={[name, 'link']}
                                rules={[{ required: true, message: 'Missing link' }]}
                                initialValue={'#'}
                            >
                                <Input />
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(name)} />
                        </div>
                    ))}
                    <Form.Item>
                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Add Social Links
                        </Button>
                    </Form.Item>
                </>
            )}
        </Form.List>
    )
}

export default SocialLinksInput