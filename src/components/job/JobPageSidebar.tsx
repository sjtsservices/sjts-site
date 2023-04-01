/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type JobListItem } from '@/schema/Job.schema'
import { Job } from '@prisma/client'
import { Card, Space, Tag } from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime';
import { nanoid } from 'nanoid';
import React, { type PropsWithChildren } from 'react'


dayjs.extend(relativeTime);

export type JobPageSidebar = {
    job: JobListItem,
    className?: string
}
type JobPageSidebarItemType = React.FunctionComponent<{ title: string, children?: any }>;
type JobPageSidebarType = React.FunctionComponent<PropsWithChildren<JobPageSidebar>>;

const CardItem: JobPageSidebarItemType = ({ title, children }) => {
    return <div className=' border-0 border-b border-solid border-gray-200 pt-3 pb-1'>
        <h3 className='text-gray-700'>{title}</h3>
        {children}
    </div>
}
const JobPageSidebar: JobPageSidebarType = ({ job, className, children }) => {

    return (
        <Card className={`shadow-md ${className || ''}`}>
            <div className="flex gap-2 mt-2 text-gray-700 font-bold text-xl mb-4">
                {job.start_salary && <span className=''>&#x20b9;{new Intl.NumberFormat('en-IN').format(job.start_salary)}</span>}
                {job.max_salary && <span className=''> - &#x20b9;{new Intl.NumberFormat('en-IN').format(job.max_salary)}</span>}

                {(job.start_salary || job.max_salary) && job.rate && <span className='lowercase'> /{job.rate}</span>}
            </div>

            {
                job.expiredAt && <CardItem title='Expire'><span className='text-gray-400 text-lg'> {dayjs(job.expiredAt).fromNow()}</span></CardItem>
            }

            {
                job.experience &&
                <CardItem title='Experience'>
                    <span className='text-gray-400 text-lg'> {job.experience || 0} years</span>
                </CardItem>
            }

            <CardItem title='Job Type'>
                <span className='text-gray-400 text-lg'>
                    {job.type === 'FULL_TIME' && 'Full Time' ||
                        job.type === 'FREELANCE' && 'Freelance' ||
                        job.type === 'PART_TIME' && 'Part Time'
                    }
                </span>
            </CardItem>

            <CardItem title="Skills">
                <Space className='mt-2' size={[0, 8]} wrap>
                    {
                        job.skills.map((skill: any) => {
                            return <Tag key={nanoid()} color="orange">{skill.skill}</Tag>
                        })
                    }
                </Space>
            </CardItem>

            {children}

        </Card>
    )
}



export default JobPageSidebar