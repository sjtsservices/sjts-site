import { api } from '@/utils/api'
import { CheckOutlined, ClockCircleOutlined, CloseOutlined, DownOutlined, QuestionOutlined } from '@ant-design/icons'
import { ApplicationStatus } from '@prisma/client'
import { Dropdown, message } from 'antd'
import React, { useState } from 'react'


export type ApplicationStatusChangerProps = {
    appId: string,
    status: ApplicationStatus,
    onChange?: (status: ApplicationStatus) => void,
    loading?: boolean
}

const AppliactionStatusLable = {
    [ApplicationStatus.ACCEPTED]: <span> Accept</span>,
    [ApplicationStatus.DECLINED]: <span> Declined</span>,
    [ApplicationStatus.PENDING]: <span> Pending</span>,
}

const ApplicationStatusChanger = ({appId:id, status, onChange}: ApplicationStatusChangerProps) => {
    const updateMutation = api.application.update.useMutation();
    const [currentStatus, setCurrentStatus] = useState(status);

    const changeStatus = async (status: ApplicationStatus) => {
        try {
            const res = await updateMutation.mutateAsync({id, status});
            if(res){
                onChange?.(res.status);
                setCurrentStatus(res.status)
            }
            void message.success("Status changed successfully!");
        } catch (error) {
            void message.error("Status change failed!");
        }
        onChange
    }
  return (
    <Dropdown.Button  icon={<DownOutlined />} menu={{items: [
        {
            key: ApplicationStatus.ACCEPTED,
            label: AppliactionStatusLable[ApplicationStatus.ACCEPTED],
            onClick: () => void changeStatus(ApplicationStatus.ACCEPTED)
        },
        {
            key: ApplicationStatus.DECLINED,
            label: AppliactionStatusLable.DECLINED,
            onClick: () => void changeStatus(ApplicationStatus.DECLINED)
        },
        {
            key: ApplicationStatus.PENDING,
            label: AppliactionStatusLable.PENDING,
            onClick: () => void changeStatus(ApplicationStatus.PENDING)
        },
    ],
    activeKey: currentStatus || status
    }}>
        {AppliactionStatusLable[currentStatus || status]}
    </Dropdown.Button>
  )
}

export default ApplicationStatusChanger