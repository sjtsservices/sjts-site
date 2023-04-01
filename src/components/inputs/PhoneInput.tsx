/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React, {useEffect, useState} from 'react'
import { Input, Select } from 'antd'
import {
  parsePhoneNumber,
  getCountries,
  formatPhoneNumberIntl,
} from 'react-phone-number-input'
import { CountryCode } from 'libphonenumber-js'
import { useTranslation } from 'react-i18next'

type PhoneNumberFormItemProps = {
  value?: any
  onChange?: (value: any) => void
}

export const PhoneNumberInput: React.FC<PhoneNumberFormItemProps> = ({value, onChange}) => {
  const { t } = useTranslation('single_components')
  const [countryCode, setCountryCode] = useState<CountryCode>()

  useEffect(() => {
    if(value){
      const parsed = parsePhoneNumber(value)
      setCountryCode(parsed?.country)
    }
  }, [value])

  const countryOptions: { value: string; label: React.ReactElement }[] =
    getCountries().map((code) => {
      return {
        value: code,
        label: (
          <span className="phone-icon-container">
            {' '}
            <img src={`images/flags/${code}.svg`} alt="" className="country-flag-icon" /> {code}
          </span>
        ),
      }
  })

  function numberInputChanged(phone: string) {
    const parsed = parsePhoneNumber(phone, countryCode)
    //setCountryCode(parsed?.country) //useless if there is useEffect 
    if(typeof onChange === 'function') onChange(parsed ? formatPhoneNumberIntl(parsed.number) : phone)
  }

  function selectCountry(code: any) {
    setCountryCode(code)
    const parsed = parsePhoneNumber(value, code)
    if(typeof onChange === 'function') onChange(parsed && formatPhoneNumberIntl(parsed.number))
  }

  return (
    <Input
      className="phone-input-container"
      placeholder={t('User\'s phone number')}
      onChange={(e) => numberInputChanged(e.target.value)}
      value={value}
      addonBefore={
        <Select
          showSearch
          options={countryOptions}
          onSelect={selectCountry}
          // value={parsePhoneNumber(value)?.country} //if value === null => crash 
          value={countryCode}
          placeholder={
            <img alt="" src="images/flags/unknown.svg" className="unknown-country-flag-icon"/>
          }
          className="same-as-input phone-country-select"
        />
      }
    />
  )
}

export default PhoneNumberInput