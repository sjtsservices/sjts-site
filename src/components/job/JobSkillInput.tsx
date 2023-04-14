import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select, Space } from 'antd';

const onFinish = (values: any) => {
    // console.log('Received values of form:', values);
};

const JobSkillInput = () => {


    return (
        <>
            <Form.List name="skills">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map(({ key, name, ...restField }) => (
                            <div className='flex items-baseline gap-3 mb-2 ' key={key} >
                                <Form.Item
                                    style={{ width: '100%'}}
                                    {...restField}
                                    name={[name, 'skill']}
                                    rules={[{ required: true, message: 'Missing skill title' }]}
                                >
                                    <Input placeholder="Skill Title" style={{ width: '100%' }} />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(name)} />
                            </div>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Required Skill
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
        </>

    )
};

export default JobSkillInput;