import { getJobSeeker } from '@/helpers/handleJobseekerLocally'
import { JobListItem } from '@/schema/Job.schema'
import { Job } from '@prisma/client'
import { nanoid } from 'nanoid'
import React from 'react'
import JobCard from './JobCard'

export type JobGridProps = {
    jobs: Job[] | JobListItem[]
}

const JobGrid = ({ jobs }: JobGridProps) => {
    const localSeeker = window !== undefined ? getJobSeeker() : undefined;

    return (
        <div className='container mx-auto justify-items-center px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
            {
                jobs.map(job => {
                    return <JobCard savedSeeker={localSeeker} job={job} key={nanoid()} />
                })
            }
        </div>
    )
}

export default JobGrid