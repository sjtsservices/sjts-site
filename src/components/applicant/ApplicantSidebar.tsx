import { CheckOutlined, CloseOutlined, CopyOutlined, DownloadOutlined, EyeOutlined, FilePdfOutlined, MailOutlined, MoreOutlined, PhoneOutlined, UserOutlined, WhatsAppOutlined } from '@ant-design/icons'
import { JobSeeker } from '@prisma/client'
import { Button, Card, message, Tooltip } from 'antd'
import Link from 'next/link'
import React from 'react'
import JobAvatar from '../job/JobAvatar'
import dayjs from 'dayjs';
import DownloadResume from '../DownloadResume'

 
export type ApplicantSidebarProps = {
    applicant: JobSeeker,
    loading?: boolean
}

const ListItem = ({title, children}: {title: string, children?: any}) => {
    return <div className='border-0 border-b border-solid border-gray-200 py-2 last:border-b-0'>
        <h3 className='text-sm font-bold text-gray-500'>{title}</h3>
        {children}
    </div>
}

const ApplicantSidebar = ({ applicant, loading }: ApplicantSidebarProps) => {
    const handleCopy = (text: string) => {
        void navigator.clipboard.writeText(text);
        void message.success("Email copied successfully");
    }
    return (
        <div className='max-w-md w-full space-y-3'>
            <Card bordered={true} className='border border-solid border-gray-300 ' loading={loading} >
                <Card.Meta avatar={<JobAvatar image={applicant.image_url} icon={<UserOutlined />} />} />
                <div className='my-3'>
                    <h2 className='text-gray-600'>{applicant.name}</h2>
                    <div className='flex justify-between items-center text-gray-500 gap-1'>
                        <p className='break-words'>{applicant.email}</p>
                        <Button size='small' onClick={() => handleCopy(applicant.email)} icon={<CopyOutlined />} />
                    </div>
                </div>

                <div className="flex gap-2 mt-10">
                    <Link target={'_blank'} href={`mailto:${applicant.email}`}><Tooltip title={`Email to ${applicant.email}`}><Button icon={<MailOutlined />}   /></Tooltip></Link>
                    <Link target={'_blank'} href={`tel:${applicant.phone}`}><Tooltip title={`Call to ${applicant.phone}`}><Button icon={<PhoneOutlined />}   /></Tooltip></Link>
                    <Link target={'_blank'} href={`https://wa.me/${applicant.phone}`}><Tooltip title={`Whatsapp on ${applicant.phone}`}><Button   icon={<WhatsAppOutlined />} /></Tooltip></Link>
                    <Tooltip title="View pdf"><a target={'_blank'} href={applicant.cvUrl}><Button icon={<FilePdfOutlined />} /></a></Tooltip>
                    <Tooltip title="Download Resume"><DownloadResume pdfURL={applicant.cvUrl} outputFilename={`${applicant.id}.pdf`} small></DownloadResume></Tooltip>
                </div>

            </Card>

            <Card className='border border-solid border-gray-300 capitalize' loading={loading}>
                <ListItem title="Phone:">{applicant.phone}</ListItem>
                <ListItem title="Address:">{applicant.address}</ListItem>
                <ListItem title="City:">{applicant.city}</ListItem>
                <ListItem title="State:">{applicant.state}</ListItem>
                <ListItem title="Country:">{applicant.country}</ListItem>
                <ListItem title="Joined On:">{dayjs(applicant.createdAt).format('DD-MM-YYYY')}</ListItem>
            </Card>
        </div>
    )
}

export default ApplicantSidebar