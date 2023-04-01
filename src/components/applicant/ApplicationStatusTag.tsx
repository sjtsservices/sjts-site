import { ApplicationStatus } from '@prisma/client'
import { Tag } from 'antd'
import React from 'react'

export type ApplicationStatusTagProps = {
    status: ApplicationStatus
}

const ApplicationStatusTag = ({status}: ApplicationStatusTagProps) => {
    const tagText = status === 'ACCEPTED'&&'Accepted'||status === 'DECLINED'&&'Declined'||status === 'PENDING' && 'Pending';
    const tagColor = {
        [ApplicationStatus.ACCEPTED]: 'green',
        [ApplicationStatus.PENDING]: 'orange',
        [ApplicationStatus.DECLINED]: 'red'
    }
  return (
    <Tag color={tagColor[status]}>{tagText}</Tag>
  )
}

export default ApplicationStatusTag