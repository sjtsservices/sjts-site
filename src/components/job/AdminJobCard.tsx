/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type JobListItem } from '@/schema/Job.schema'
import { JobSeeker, type Job } from '@prisma/client'
import { Button, Card, Dropdown, MenuProps, Space, Tag } from 'antd'
import React from 'react'
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { nanoid } from 'nanoid'
import { isAlreadyApplied } from '@/helpers/handleSubmissionLocally'
import Link from 'next/link'
import JobAvatar from './JobAvatar'
import ApplyModal from '../applicant/ApplyModal';
import { MoreOutlined } from '@ant-design/icons';
import DeleteJob from './DeleteJob';

dayjs.extend(relativeTime)

export type AdminJobCardProps = {
  job: JobListItem,
  onDelete?: (job: Job)=>void
}

const AdminJobCardOptions = ({ jobId, onDelete}: { jobId: string, onDelete?: (job: Job) => void }) => {
  const items: MenuProps['items'] = [
    {
      label: <a href="#">Edit</a>,
      key: '0',
    },
    {
      label: <DeleteJob jobId={jobId} onDelete={onDelete}><span className='text-red-500'>Delete</span></DeleteJob>,
      key: '1',
    },
  ]
  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Button icon={<MoreOutlined />} />
    </Dropdown>
  )
}

const AdminJobCard = ({ job, onDelete }: AdminJobCardProps) => {

  const viewJobUrl = `/admin/jobs/${job.id}`;

  return (
    <Card className='max-w-md w-full shadow border border-solid border-transparent hover:border-primary transition-all'>
      <div className='mb-5 flex justify-between'>
        <div className="w-max">
          <JobAvatar image={job.thumbnail} />
        </div>

        <div className="w-full ">
          <div className="flex justify-end">
            <AdminJobCardOptions jobId={job.id} onDelete={onDelete} />
          </div>
          <div className="w-full flex items-center justify-center flex-col">
            <Link className='text-center' href={`/admin/jobs/${job.id}/applications`}>
              <p className=' text-gray-600 font-bold'>Submissions</p>
              <p className='text-xl text-gray-700 font-bold'>{job._count.applications}</p>
            </Link>
          </div>
        </div>
      </div>
      <div className=''>
        <div className="flex items-baseline gap-1">
          <div className='flex-grow'>
            <Link href={viewJobUrl} className=''><h3 className=''>{job.title}</h3></Link>
            <div className="flex space-x-2 justify-start">
              <span className='text-gray-400 font-semibold text-xs'>{dayjs(job.createdAt).fromNow()}</span>
              {
                job.expiredAt && <span className='text-gray-400 font-semibold text-xs'> | expire {dayjs(job.expiredAt).fromNow()}</span>
              }
            </div>
          </div>

          <div className="flex-grow-0">
            <Tag color="purple">{job.type}</Tag>
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          {job.start_salary && <span className='text-gray-400 font-semibold'>&#x20b9;{new Intl.NumberFormat('en-IN').format(job.start_salary)}</span>}
          {job.max_salary && <span className='text-gray-400 font-semibold'>-  &#x20b9;{new Intl.NumberFormat('en-IN').format(job.max_salary)}</span>}
        </div>

        {
          job.skills &&
          <Space className='mt-2' size={[0, 8]} wrap>
            {
              job.skills.map((skill: any) => {
                return <Tag key={nanoid()} color="orange">{skill.skill}</Tag>
              })
            }
          </Space>
        }

      </div>
    </Card>
  )
}

export default AdminJobCard