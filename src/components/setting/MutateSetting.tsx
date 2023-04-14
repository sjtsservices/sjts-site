/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '@/utils/api'
import { SiteConfig } from '@prisma/client'
import { Button, Form, Input, message, } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSiteInfo } from '~/lib/hooks/useSiteInfo'
import PhoneInput from '../inputs/PhoneInput'
import country from 'country-state-city/lib/country'
import state from 'country-state-city/lib/state'
import CitySelectorInput from '../inputs/CitySelectorInput'
import CountrySelectoInput from '../inputs/CountrySlectorInput'
import StateInput from '../inputs/StateSelectorInput'
import { useAddress } from '~/lib/hooks/useAddress'
import SocialLinksInput from '../inputs/SocialLinksInput'

export type SettingPageProps = {
    data?: SiteConfig
}

const MutateSetting = (props: SettingPageProps) => {
    const { setInfo } = useSiteInfo()
    const [form] = Form.useForm();
    const { country, state, setCountry, setState } = useAddress({ country: 'india' });
    const createMutation = api.setting.create.useMutation();
    const updateMutation = api.setting.update.useMutation();
    const [formChanged, setFormChanged] = useState(false);

    const save = async () => {
        try {
            const validatedData = await form.validateFields();
            if (props.data) {
                const res = await updateMutation.mutateAsync({ ...validatedData });
                void message.success('Updated Successfully');
                // props.onMutate?.(res);
                if (res) setInfo?.(res)
            } else {
                const res = await createMutation.mutateAsync({ ...validatedData });
                void message.success('Created Successfully');
                // props.onMutate?.(res);
                if (res) setInfo?.(res)
            }
            setFormChanged(false);
        } catch (error) {
            void message.error('Operation failed')
        }
    }


    useEffect(() => {
        form.setFieldsValue(props.data)
    }, [props.data])


    return (
        <div>
            <Form
                layout='vertical'
                form={form}
                size="large"
                // onChange={() => setFormChanged(true)}
                onChangeCapture={() => setFormChanged(true)}
            >
                {
                    props.data && <Form.Item name="id" hidden>
                        <Input />
                    </Form.Item>
                }
                <Form.Item name="email" rules={[{ required: true, message: 'Email is required' }, { type: 'email', message: "Invalid email" }]}>
                    <Input />
                </Form.Item>

                <Form.Item name="phone">
                    <PhoneInput />
                </Form.Item>

                <Form.Item name="address" rules={[{ required: true, message: 'Address is required' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="country" initialValue={'india'} rules={[{ required: true, message: 'Country is required' }]}>
                    <CountrySelectoInput onCountrySelect={setCountry} />
                </Form.Item>
                <Form.Item name="state" rules={[{ required: true, message: 'State is required' }]}>
                    <StateInput onStateSelect={setState} countryCode={country?.isoCode} />
                </Form.Item>
                <Form.Item name="city" rules={[{ required: true, message: 'City is required' }]}>
                    <CitySelectorInput stateCode={state?.isoCode} countryCode={country?.isoCode} />
                </Form.Item>

                <SocialLinksInput />

            </Form>

            <div className='flex justify-end'><Button disabled={!formChanged} onClick={()=> void save()} type="primary">Save</Button></div>
        </div>
    )
}

export default MutateSetting