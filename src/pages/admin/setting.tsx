/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {Card} from 'antd'
import React, { useContext } from 'react'
import SettingsTab from '~/components/setting/SettingsTab'
import { SiteContext } from '~/lib/providers/SiteProvider'

const SettingPage = () => {
  return (
    <>
      <div className='container mx-auto '>
        <Card>
          <SettingsTab />
        </Card>
      </div>
    </>
  )
}

export default SettingPage