import { api } from '@/utils/api'
import { Skeleton } from 'antd'
import React from 'react'
import MutateSetting from './MutateSetting'

const GeneralSettingTab = () => {
    const {data:setting, isLoading} = api.setting.get.useQuery()
    return (
      <div className=' w-full'>
          <div className="mt-10 max-w-lg mx-auto">
              <Skeleton active={true} loading={isLoading}>
                  <MutateSetting data={setting === null ? undefined : setting} />
              </Skeleton>
          </div>
      </div>
    )
}

export default GeneralSettingTab