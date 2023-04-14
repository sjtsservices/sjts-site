/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { api } from '@/utils/api';
import { Select } from 'antd';
import { type IState, State } from 'country-state-city'
import { nanoid } from 'nanoid';
import React, { type CSSProperties, useEffect, useState } from 'react'

type CurrencyRes = {
    name: string;
    rate: string;
    curCode: string;
    curSymbol: string;
}

export type StateInputProps = {
    onChange?: (value: any) => void,
    value?: any,
    onSelect?: (cur: CurrencyRes | undefined) => void,
}

const CurrencySelector = (props: StateInputProps) => {
    const {data, isLoading} = api.country.listCurrency.useQuery(undefined, {refetchOnWindowFocus: false, staleTime: 200000});
    const [localData, setLocalData] = useState<CurrencyRes[]>([])
    const handleSearch = (newValue: string) => {
        if(!data) return setLocalData([]);
        if(newValue === '') return setLocalData(data);
        const res = data.filter(value => (value.curCode.toLowerCase().includes(newValue.toLowerCase()))|| value.name.toLowerCase().includes(newValue.toLowerCase()));
        setLocalData(res)
        // console.log({newValue, res})
    }

    const handleChange = (value: string) => {
        props.onChange?.(value);
        props.onSelect?.(data?.find(val => val.curCode === value))
    }

    useEffect(()=>{
        setLocalData(data||[])
    }, [data])
    return (
        <Select
        style={{width: '100px'}}
            className='w-full'
            showSearch
            value={props.value}
            onChange={handleChange}
            onSearch={handleSearch}
            showArrow={false}
            filterOption={false}
            options={(localData ).sort((a, b) => a.curCode > b.curCode ? 1 : -1).map((d) => ({
                key:nanoid(),
                value: d.curCode,
                label: <div className='capitalize'>{d.curSymbol} | {d.curCode}</div>
            }))}
        />
    )
}

export default CurrencySelector