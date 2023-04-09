/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Select } from 'antd'
import { nanoid } from 'nanoid'
import React from 'react'
import { CountryCodes } from '~/lib/countryCodes'

export type CountryCodeSelectorProps = {
    onChange?: (value: any) => void,
    value?: any
}

const CountryCodeSelector = ({
    onChange,
    value
}: CountryCodeSelectorProps) => {
  return (
    <Select defaultValue={'+91'} value={value} onChange={onChange}>
        {
            CountryCodes.map(c => {
                return <Select.Option value={c.dial_code} key={nanoid()}>{c.code}</Select.Option>
            })
        }
    </Select>
  )
}

export default CountryCodeSelector