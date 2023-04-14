/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { api } from '@/utils/api'
import { InputNumber, Select } from 'antd'
import { nanoid } from 'nanoid'
import React, { useContext } from 'react'
import { SiteContext } from '~/lib/providers/SiteProvider'

export type CurrencyInputProps = {
  value?: any,
  onChange?: (value: any) => any
}

const CurrencyInput = ({ value, onChange }: CurrencyInputProps) => {
  const { info } = useContext(SiteContext);
  return (
    <InputNumber
      value={value}
      onChange={onChange}
      addonBefore={info?.baseCur}
    />
  )
}

export default CurrencyInput