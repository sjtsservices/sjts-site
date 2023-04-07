/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type JobListItem } from '@/schema/Job.schema'
import { type Job } from '@prisma/client'
import { api } from '@/utils/api'
import { Card, DatePicker, Form, Input, InputNumber, message, Select } from 'antd'
import React, { useEffect, useImperativeHandle } from 'react'

import Editor from '~/components/Editor'
import JobSkillInput from '~/components/job/JobSkillInput'
import dayjs from 'dayjs'

export type HandleMutateJobForm = {
  save: () => Promise<void>,
  reset: () => void
}

export type MutateJobFormProps = {
  data?: Job | JobListItem,
  onChange?: (formData: any) => void,
  onMutate?: (job?: Job | JobListItem) => void,
  onLoading?: (isLoading: boolean) => void;
}

const MutateJobForm = React.forwardRef<HandleMutateJobForm, MutateJobFormProps>((props, ref) => {
  const [form] = Form.useForm();
  const createJobMutation = api.jobs.create.useMutation();
  const updateJobMutation = api.jobs.update.useMutation();

  const save = async () => {
    try {
      const validatedData = await form.validateFields();
      const expiredAt = validatedData.expiredAt && dayjs(validatedData.expiredAt).toDate() 
      if (props.data) {
        const res = await updateJobMutation.mutateAsync({ ...validatedData, expiredAt });
        void message.success('Updated Successfully');
        props.onMutate?.(res);
      } else {
        const res = await createJobMutation.mutateAsync({ ...validatedData, expiredAt });
        void message.success('Created Successfully');
        props.onMutate?.(res);
        form.resetFields();
      }
    } catch (error) {
      void message.error('Operation failed')
    }
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
    props.onLoading?.(createJobMutation.isLoading || updateJobMutation.isLoading);
  }, [createJobMutation.isLoading, updateJobMutation.isLoading])


  useEffect(() => {
    if (props.data) {
      if(props.data.expiredAt){
        form.setFieldsValue({...props.data, expiredAt: dayjs(props.data.expiredAt)})
      }else{
        form.setFieldsValue(props.data)
      }
    }
  }, [props.data])

  return (
    <>

      <Form
        layout='vertical'
        form={form}
        onChange={props.onChange}
      >
        {
          props.data && <Form.Item name="id" hidden >
            <Input />
          </Form.Item>
        }

        <div className="grid grid-cols-1 lg:grid-cols-[auto_400px] gap-5 items-start">
          <Card>
            <Form.Item name="title" label="Job Title" rules={[{ required: true, message: 'Missing Job title' }]}>
              <Input />
            </Form.Item>
            <Form.Item name="desc" label="Job Description">
              <Editor />
            </Form.Item>
            <Form.Item name="summary" label="Job Summary">
              <Input.TextArea rows={5} />
            </Form.Item>
          </Card>

          <Card>
            <Form.Item name="type" initialValue={'FULL_TIME'} label="Job Type">
              <Select>
                <Select.Option value="FULL_TIME">Full Time</Select.Option>
                <Select.Option value="PART_TIME">Part Time</Select.Option>
                <Select.Option value="FREELANCE">Freelance</Select.Option>
              </Select>
            </Form.Item>
            <div className="grid grid-cols-2 gap-5">
              <Form.Item name="start_salary" label="Start Salary">
                <InputNumber addonBefore={<span>&#x20b9;</span>} min={0} style={{width: '100%'}}/>
              </Form.Item>
              <Form.Item name="max_salary" label="Max Salary">
                <InputNumber addonBefore={<span>&#x20b9;</span>} min={0} style={{width: '100%'}} />
              </Form.Item>
            </div>
            <Form.Item name="rate" initialValue={'MONTH'} label="Rate">
              <Select>
                <Select.Option value="HOUR">Hourly</Select.Option>
                <Select.Option value="MONTH">Monthly</Select.Option>
                <Select.Option value="YEAR">Annualy</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item name="experience" label="Experience">
              <InputNumber min={0} addonAfter="Years" />
            </Form.Item>
            <Form.Item name="expiredAt" label="Expired At">
              <DatePicker onSelect={() => props.onChange?.(form.getFieldsValue())}/>
            </Form.Item>

            <Form.Item name="skills" label="Job Summary">
              <JobSkillInput />
            </Form.Item>
          </Card>
        </div>
      </Form>

    </>
  )
})

MutateJobForm.displayName = 'Mutatejobform';

export default MutateJobForm