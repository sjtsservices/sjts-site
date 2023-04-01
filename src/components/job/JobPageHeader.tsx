import React from 'react'
import randomTailwindGradient from '~/lib/randomTailwindGradient'
import JobAvatar from './JobAvatar'

export type JobPageHeaderProps = {
    jobThumnail?: string
}

const JobPageHeader = ({jobThumnail}: JobPageHeaderProps) => {
  return (
    <header className={`min-h-36 md:h-72 py-10 px-5 bg-cover bg-no-repeat mb-20 bg-center relative flex items-center justify-center text-white ${randomTailwindGradient()}`} style={{ backgroundImage: jobThumnail && `url(${jobThumnail})` }}>
      <div className="absolute w-full  bottom-0 translate-y-1/2 left-0">
        <div className="container mx-auto px-5">
        <JobAvatar image={jobThumnail}/>
        </div>
      </div>
    </header>
  )
}

export default JobPageHeader