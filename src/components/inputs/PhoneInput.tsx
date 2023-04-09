/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
// import PI from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Spin } from 'antd';

const PI = dynamic(() => import('react-phone-input-2'), {loading: (prop) => <Spin/>});

export type PhoneInputProps = {
    onChange?: (value: any) => void,
    value?: any
}

const PhoneInput = ({ value, onChange }: PhoneInputProps) => {

    return (
        <PI
            country={'in'}
            value={value}
            onChange={phone => onChange?.(phone)}
            inputStyle={{width: '100%'}}
        />
    )
}

export default PhoneInput