import { BlockOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'
import randomTailwindGradient from '~/lib/randomTailwindGradient'
//bg-gradient-to-r from-violet-600 to-indigo-600

export type JobAvatarProps = {
    image?: string|null,
    icon?: React.ReactNode,
    fixedSize?: 'large'|'small'|'default'
}

const JobAvatar = ({image, icon, fixedSize}: JobAvatarProps) => {
  return (
    <Avatar shape="square" src={image} className={`${randomTailwindGradient()} text-white`} size={fixedSize || { xs: 70, md: 100, lg: 100, xl: 100, xxl: 120 }} icon={icon || <BlockOutlined />} />
  )
}

export default JobAvatar