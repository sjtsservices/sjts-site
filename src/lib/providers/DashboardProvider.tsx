/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, type PropsWithChildren, useState } from 'react'

export type PageDataLayout = 'card' | 'table';

export type SortData = {
    sortBy: string,
    sortOrder: 'asc' | 'desc',
    lable: string
}

export type ToolbarData = {
    layout?: PageDataLayout,
    searchString?: string,
    sortData?: SortData[],
    filterData?: {[key: string]: string}
}

export type DashboardContextParam = {
    toolbarData?:ToolbarData,
    setToolbarData?: (data?: ToolbarData) => void,
}

export const DashboardContext = createContext<DashboardContextParam>({});

const DashboardProvider = ({children}: PropsWithChildren) => {
    const [toolbarData, setToolbarData] = useState<ToolbarData>();
    return (
        <DashboardContext.Provider value={{toolbarData, setToolbarData}}>{children}</DashboardContext.Provider>
    )
}

export default DashboardProvider