/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type JobListItem } from '@/schema/Job.schema'
import { JobSeeker, type Job } from '@prisma/client'
import { Button, Card, Space, Tag } from 'antd'
import React, { useState } from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { nanoid } from 'nanoid'
import { isAlreadyApplied } from '@/helpers/handleSubmissionLocally'
import Link from 'next/link'
import JobAvatar from './JobAvatar'
import ApplyModal from '../applicant/ApplyModal';

dayjs.extend(relativeTime)

export type JobCardProps = {
  job: Job | JobListItem,
  notApplicable?: boolean,
  savedSeeker?: JobSeeker,
  adminMode?: boolean
}


const JobCard = ({ job, notApplicable=false, savedSeeker, adminMode}: JobCardProps) => {

  const viewJobUrl = adminMode ? `/admin/jobs/${job.id}` : `/jobs/${job.id}`;


  return (
    <Card className='max-w-md w-full relative shadow border border-solid border-transparent hover:border-primary transition-all '>
      <div className='mb-5'>
        <JobAvatar image={job.thumbnail} />
      </div>
      <div className=''>
        <Link href={viewJobUrl} className=''><h3 className=''>{job.title}</h3></Link>
        <div className="flex space-x-2">
          <span className='text-gray-400 font-semibold text-xs'>{dayjs(job.createdAt).fromNow()}</span>
          {
            job.expiredAt && <span className='text-gray-400 font-semibold text-xs'> | expire {dayjs(job.expiredAt).fromNow()}</span>
          }
        </div>
        {
          job.summary && 
          <div className="mt-2">
            <p className='text-gray-500 line-clamp-3'>{job.summary}</p>
          </div>
        }

        <div className="flex gap-2 mt-2">
          {job.start_salary && <span className='text-gray-400 font-semibold'>&#x20b9;{new Intl.NumberFormat('en-IN').format(job.start_salary)}</span>}
          {job.max_salary && <span className='text-gray-400 font-semibold'>-  &#x20b9;{new Intl.NumberFormat('en-IN').format(job.max_salary)}</span>}
        </div>

        {
          job.skills && 
          <Space className='mt-2' size={[0, 8]} wrap>
            {
              job.skills.map((skill: any) => {
                return <Tag key={nanoid()} className='break-words' color="orange">{skill.skill}</Tag>
              })
            }
          </Space>
        }

        {
          !notApplicable && 
          <>
          <div className="py-5"></div>
          <div className=' mt-5 absolute bottom-5 left-0 w-full px-5'>
            {/* <Button disabled={checkIsAlreadyApplied()} type="primary" size='large' >Apply</Button> */}
            <ApplyModal jobId={job.id} ><Button block type='primary'>Apply</Button></ApplyModal>
          </div>
          </>
        }
      </div>
    </Card>
  )
}

export default JobCard