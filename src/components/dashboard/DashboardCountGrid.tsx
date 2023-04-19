import React from 'react'
import JobDesktopCountWidget from '../job/JobDesktopCountWidget'
import AllEnquiryCountWidget from '../enquiry/AllEnquiryCountWidget'
import OGCountCardWidgetCard from '../online-gaming/OGCountCardWidgetCard'
import TotalApplicantCountCard from '../applicant/TotalApplicantCountCard'

const DashboardStatisticsGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-5 justify-items-center'>
        <JobDesktopCountWidget/>
        <AllEnquiryCountWidget/>
        <OGCountCardWidgetCard/>
        <TotalApplicantCountCard/>
    </div>
  )
}

export default DashboardStatisticsGrid