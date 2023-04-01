import { ApplicationListItem } from '@/schema/Applications.schema'
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons'
import { Applications } from '@prisma/client'
import { Card } from 'antd'
import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'
import React from 'react'
import JobAvatar from '../job/JobAvatar'
import ApplicationStatusChanger from './ApplicationStatusChanger'
import ApplicationStatusTag from './ApplicationStatusTag'

dayjs.extend(RelativeTime)

export type ApplicationCardProps = {
  application: ApplicationListItem
}

const ApplicationCard = ({ application }: ApplicationCardProps) => {
  return (
    <Card className='w-full'>
      <div className="flex  gap-3 ">
        <div className='flex-grow-0 py-1'>
          <JobAvatar fixedSize='large' icon={<AppstoreOutlined />} />
        </div>
        <div className='flex-grow '>
          <h3>{application.job.title}</h3>
          <div className="flex gap-2 items-center justify-between">
            <span className='text-gray-400 font-semibold text-xs'>Applied {dayjs(application.createdAt).fromNow()}</span>
            <ApplicationStatusTag status={application.status} />
          </div>

          <div className="flex items-end justify-end mt-4 w-full">
            <div><ApplicationStatusChanger appId={application.id} status={application.status} /></div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ApplicationCard