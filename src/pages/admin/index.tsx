import React from 'react'
import StickyBox from "react-sticky-box";
import DashboardStatisticsGrid from '~/components/dashboard/DashboardCountGrid';
import RecentEnquiryWidget from '~/components/enquiry/RecentEnquiryWidget';

const AdminPage = () => {

  return (
    <>
      <StickyBox offsetTop={10}>
        <DashboardStatisticsGrid/>

        <div className="mt-10">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-stretch"> */}
            <RecentEnquiryWidget/>
          {/* </div> */}
        </div>

        {/* <div className='flex items-center justify-center min-h-screen '>
          <div className='flex items-center justify-center flex-col space-y-4'>
          <h1 className='text-4xl text-gray-500'>This page is comming soon...</h1>
          <Link href={'/admin/jobs'} className=""><Button>Go To Jobs</Button></Link>
          </div>
        </div> */}
      </StickyBox>
    </>
  )
}

export default AdminPage