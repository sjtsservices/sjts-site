/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Tabs, TabsProps } from 'antd';
import React, { useState } from 'react'
import GeneralSettingTab from './GeneralSettingTab';
import CurrencyTab from './CurrencyTab';
import useWindowSize from '~/lib/hooks/useWindowSize';

const items: TabsProps['items'] = [
    {
      key: '1',
      label: `General Setting`,
      children: <GeneralSettingTab/>,
    },
    {
      key: '2',
      label: `Currency`,
      children: <CurrencyTab/>,
    }
  ];

const SettingsTab = () => {
  const {width, height} = useWindowSize()
    const [activeTab, setActiveTab] = useState<any>(undefined)
    const onChange = (value: string) => {
        const actTab = items.find(item => item.key === value);
        if(actTab) setActiveTab(actTab.label)
    }
  return (
    <>
    <div className='flex justify-between items-center py-3 mb-5'>
      <h1 className='text-xl font-bold md:text-xl '>{activeTab}</h1>
    </div>
    <Tabs title='Setting' tabPosition={(width||0) >= 768 ? 'left': 'top'} defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  )
}

export default SettingsTab