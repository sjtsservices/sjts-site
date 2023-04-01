import { api } from '@/utils/api'
import React from 'react'
import useQueryData from '~/lib/hooks/useQueryData'
import { useToolbar } from '~/lib/hooks/useToolBar';
import AdminJobCardGrid from './AdminJobCardGrid';
import JobTable from './JobTable';




const AllJobs = () => {
  // const { search, sort, paginate } = useQueryData();
  // const { toolbarData, setToolbarData } = useToolbar();
  // const { data: jobs, isLoading, isError, error } = api.jobs.list.useQuery({ paginate, searchQuery: toolbarData?.searchString || search, sort: toolbarData?.sortData || sort })
  return (
    <>
      {/* <div className="hidden md:block">
        <JobTable
          loading={isLoading}
          paginationData={jobs?.meta}
          jobs={jobs?.data}
        />
      </div> */}

      <AdminJobCardGrid />
    </>
  )
}

export default AllJobs