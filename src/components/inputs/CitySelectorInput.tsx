/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Select, SelectProps } from 'antd'
import type { SizeType } from 'antd/es/config-provider/SizeContext'
import type { ICity } from 'country-state-city';
import { City } from 'country-state-city'
import type { CSSProperties} from 'react';
import React, { useEffect, useState } from 'react'

export type CityInputProps = {
  countryCode?: string,
  stateCode?: string,
  value?: any,
  onChange?: (value: any) => void,
  onCitySelect?: (city?: ICity) => void,
  style?: CSSProperties,
  size?: SizeType
}

const CitySelectorInput = (props: CityInputProps) => {
  const [data, setData] = useState<ICity[]>([]);
  const cities = props.countryCode && props.stateCode ? City.getCitiesOfState(props.countryCode, props.stateCode) : []

  const handleSearch = (val: string) => {
    setData(cities.filter(d => d.name.toLowerCase().includes(val.toLowerCase())))
  }

  const handleChange = (value: any) => {
    props.onChange?.(value);
    props.onCitySelect?.(data.find(d => d.name.toLowerCase() === value))
  }

  useEffect(() => {
    if (props.countryCode && props.stateCode) {
      // console.log("CITY", props.countryCode, props.stateCode, City.getCitiesOfState(props.countryCode, props.stateCode))
      setData(City.getCitiesOfState(props.countryCode, props.stateCode))
    } else {
      setData([] as ICity[])
    }
  }, [props])



  return (
    <Select
      size={props.size}
      showSearch
      value={props.value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={props.style}
      showArrow={false}
      filterOption={false}
      options={(data || []).map((d) => ({
        value: d.name.toLowerCase(),
        label: d.name,
      }))}
    />
  )
}

export default CitySelectorInput