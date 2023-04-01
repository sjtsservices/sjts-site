/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Select, } from 'antd';
import type { CSSProperties} from 'react';
import React, { useState } from 'react'
import type { ICountry} from 'country-state-city';
import {Country} from 'country-state-city';
import { type SizeType } from 'antd/es/config-provider/SizeContext';

export type CountryInputProps = {
    value?: any,
    placeholder?: string,
    style?: CSSProperties,
    onChange?: (value: any) => void,
    onCountrySelect?: (country: ICountry|undefined) => void,
    size?: SizeType
}

const contries = Country.getAllCountries();
const CountrySelectoInput = React.forwardRef<any, CountryInputProps>((props, ref) => {
    const [data, setData] = useState<ICountry[]>(contries);
    const [value, setValue] = useState<string>();
  
    const handleSearch = (newValue: string) => {
      const foundMatch = contries.filter(ct => ct.name.toLowerCase().includes(newValue.toLowerCase()));
      setData(foundMatch);
    };
  
    const handleChange = (newValue: string) => {
      setValue(newValue);
      props.onChange && props.onChange(newValue);
      props.onCountrySelect && props.onCountrySelect(contries.find(d => d.name.toLowerCase() === newValue))
    };
    return (
        <Select
        size={props.size}
        showSearch
        value={props.value}
        placeholder={props.placeholder}
        style={props.style}
        defaultActiveFirstOption={true}
        showArrow={false}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
        options={(data || []).map((d) => ({
          value: d.name.toLowerCase(),
          label: d.name,
        }))}
      />
    )
  })

  CountrySelectoInput.displayName = "CountryInput";

export default CountrySelectoInput