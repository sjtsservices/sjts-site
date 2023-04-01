/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { Select } from 'antd';
import { type SizeType } from 'antd/es/config-provider/SizeContext';
import { type IState, State } from 'country-state-city'
import React, { type CSSProperties, useEffect, useState } from 'react'

export type StateInputProps = {
    onChange?: (value: any) => void,
    value?: any,
    onStateSelect?: (state: IState | undefined) => void,
    countryCode?: string,
    style?: CSSProperties,
    size?: SizeType
}

const StateInput = (props: StateInputProps) => {
    const [data, setData] = useState<IState[]>([]);
    const states = State.getStatesOfCountry(props.countryCode);

    const handleSearch = (newValue: string) => {
        setData(data.filter(d => d.name.toLowerCase().includes(newValue.toLowerCase())))
    }

    const handleChange = (value: any) => {
        props.onChange?.(value);
        props.onStateSelect?.(data.find(d => d.name.toLowerCase() === value));
    }

    useEffect(() => {
        if (!props.countryCode) setData([])
        if (props.countryCode) setData(State.getStatesOfCountry(props.countryCode))
    }, [props, props.countryCode])


    return (
        <Select
            size={props.size}
            showSearch
            value={props.value}
            onChange={handleChange}
            onSearch={handleSearch}
            showArrow={false}
            style={props.style}
            filterOption={false}
            options={(data || []).map((d) => ({
                value: d.name.toLowerCase(),
                label: d.name,
            }))}
        />
    )
}

export default StateInput

