/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useToolbar } from '~/lib/hooks/useToolBar'
import SortOptions from '../SortOptions'

export type AdminPageHeaderProps = {
    title?: string,
    search?: boolean,
    layoutShifter?: boolean,
    action?: any
}

const AdminPageHeader = ({title, action}: AdminPageHeaderProps) => {
    const {toolbarData, setToolbarData} = useToolbar();
  return (
    <div className='container mx-auto px-5 py-2 shadow bg-white rounded flex items-center gap-2'>
        <div className="flex-grow-0"><h1 className='text-xl md:text-2xl font-bold'>{title}</h1></div>
        <div className="flex-grow flex justify-end">
          {
            toolbarData?.sortData && <SortOptions options={toolbarData.sortData} defaultLable="Sort By" />
          }
        </div>
        <div className="flex-grow-0 w-max space-x-1">
            {action}
        </div>
    </div>
  )
}

export default AdminPageHeader