/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { GameEventType } from '@/schema/GameEvent.schema';
import { api } from '@/utils/api';
import { convertNullToUndefined } from '@/utils/convertNullToUndefiend';
import { GameEvent } from '@prisma/client';
import { Button, DatePicker, Form, Input, Modal, message } from 'antd';
import dayjs from 'dayjs';
import React, { PropsWithChildren, useEffect, useState } from 'react'
import CurrencyInput from '../inputs/CurrencyInput';
import { PlusOutlined } from '@ant-design/icons';

export type EnquiryFormProps = {
    onMutate?: (event: GameEventType) => void,
    data?: GameEventType,
    trigger?: React.ReactElement
}

const OGMutateModal = ({ onMutate, data, trigger }: EnquiryFormProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm<any>();
    const createMutation = api.gameEvent.create.useMutation();
    const updateMutation = api.gameEvent.update.useMutation();

    const sendRequest = async () => {
        try {
            const validatedData = await form.validateFields();
            const expiredAt = validatedData.expiredAt && dayjs(validatedData.expiredAt).toDate();
            const d = convertNullToUndefined(validatedData);
            if (data) {
                const res = await updateMutation.mutateAsync({
                    id: validatedData.id, ...d, expiredAt,
                });
                void message.success('Updated Successfully');
                if (res) onMutate?.(res);
            } else {
                const res = await createMutation.mutateAsync({ ...validatedData, expiredAt });
                void message.success('Created Successfully');
                if (res) onMutate?.(res);
                form.resetFields();
            }
        } catch (error) {
            void message.error('Operation failed')
        }
    }

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        void sendRequest().then(() => {
            setIsModalOpen(false);
        })
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (data) {
            if (data.expiredAt) {
                form.setFieldsValue({ ...data, expiredAt: dayjs(data.expiredAt) })
            } else {
                form.setFieldsValue(data)
            }
        }
    }, [data])


    return (
        <>
            {
                trigger ? <span onClick={showModal}>{trigger}</span> : <Button onClick={showModal} icon={<PlusOutlined/>}> Event</Button>
            }
            <Modal title={data ? 'Update Event' : 'Create Event'} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} confirmLoading={createMutation.isLoading || updateMutation.isLoading}>
                <Form
                    layout='vertical'
                    form={form}
                >
                    {
                        data && <Form.Item name="id" hidden >
                            <Input />
                        </Form.Item>
                    }
                    <Form.Item name="title" label="Event Title" rules={[{ required: true, message: 'Missing Event title' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="link" label="Event Link" rules={[{ required: true, message: 'Missing Event Link' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="prize" label="Prize" >
                        <CurrencyInput/>
                    </Form.Item>
                    <Form.Item name="expiredAt" label="Registration Closed On" rules={[{ required: true, message: 'Missing Event Last Registration Date' }]}>
                        <DatePicker showTime={true} showSecond={false}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default OGMutateModal