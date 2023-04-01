/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ApplicationStatus, type JobSeeker } from '@prisma/client'
import { Button, Card, Dropdown, Tooltip } from 'antd'
import React from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link'
import JobAvatar from '../job/JobAvatar'
import { DeleteOutlined, DownloadOutlined, FilePdfOutlined, MailOutlined, MoreOutlined, PhoneOutlined, UserOutlined, WhatsAppOutlined } from '@ant-design/icons';
import ApplicationStatusTag from './ApplicationStatusTag';
import { ApplicationListItem } from '@/schema/Applications.schema';
import { nanoid } from 'nanoid';
import DeleteApplication from './DeleteApplication';
import DownloadResume from '../DownloadResume';

dayjs.extend(relativeTime)

export type ApplicantCardProps = {
  application: ApplicationListItem,
  onMutate?: () => void
}


const ApplicantCard = ({ application: { jobSeeker, status, id }, onMutate }: ApplicantCardProps) => {

  const viewApplicantUrl = `/admin/applicent/${jobSeeker.id}`


  return (
    <Card
      className='max-w-md w-full shadow border border-solid border-transparent hover:border-primary transition-all relative pb-10 overflow-hidden'
      
    >
      <div className='mb-5'>
        <JobAvatar image={jobSeeker.image_url} icon={<UserOutlined />} />
      </div>
      <div className=''>
        <div className="flex items-baseline justify-between">
          <Link href={viewApplicantUrl} className=''><h3 className=''>{jobSeeker.name}</h3></Link>
          <ApplicationStatusTag status={status} />
        </div>
        <div className="flex space-x-2">
          <span className='text-gray-400 font-semibold text-xs'>Applied {dayjs(jobSeeker.createdAt).fromNow()}</span>
        </div>

        <div className="mt-2 capitalize">
          <span className='text-gray-400 font-semibold'>{jobSeeker.state.trim()}/{jobSeeker.country.trim()}</span>
        </div>


        <div className="absolute w-full left-0 bottom-0 flex items-center justify-between px-5 py-1 border-0 border-t  border-gray-200 border-solid">
            <Link href={`mailto:${jobSeeker.email}`}><Tooltip title={`Email to ${jobSeeker.email}`}><Button icon={<MailOutlined/>} size="large" type="ghost" /></Tooltip></Link>
            <Link href={`tel:${jobSeeker.phone}`}><Tooltip title={`Call to ${jobSeeker.phone}`}><Button icon={<PhoneOutlined/>} size="large" type="ghost"/></Tooltip></Link>
            <Link href={`https://wa.me/${jobSeeker.phone}`}><Tooltip title={`Whatsapp on ${jobSeeker.phone}`}><Button type="ghost" size="large" icon={<WhatsAppOutlined/>}/></Tooltip></Link>
            <Tooltip title="View pdf"><Button type="ghost" size="large" icon={<FilePdfOutlined/>}/></Tooltip>
            <Tooltip title="More Options">
              <Dropdown menu={{items: [
                {
                  key: nanoid(),
                  label: <DeleteApplication onDelete={() => onMutate?.()} id={id}><span className='text-red-600'><DeleteOutlined/> <span>Delete</span></span></DeleteApplication>,
                },
                {
                  key: nanoid(),
                  label: <DownloadResume pdfURL={jobSeeker.cvUrl} outputFilename={`${jobSeeker.id}.pdf`}><span ><DownloadOutlined/> <span>Resume</span></span></DownloadResume>,
                },
              ]}}> 
              <Button type="ghost" size="large" icon={<MoreOutlined/>}/>
              </Dropdown>
            </Tooltip>
        </div>
      </div>
    </Card>
  )
}

export default ApplicantCard