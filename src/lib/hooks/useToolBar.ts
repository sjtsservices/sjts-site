/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ToolbarData, type SortData } from '~/lib/providers/DashboardProvider';
import { DashboardContext } from './../providers/DashboardProvider';
import { useContext, useEffect } from "react"

export type UseToolbarProps = {
    sortData?: SortData[],
    filterData?: {[key:string]: string}
}

export const useToolbar = ({sortData, filterData}: UseToolbarProps) => {
    const {toolbarData, setToolbarData} = useContext(DashboardContext);

    useEffect(() => {
        const res: ToolbarData = JSON.parse(JSON.stringify(toolbarData ? {...toolbarData, sortData, filterData} : {sortData, filterData}));
        setToolbarData?.(res);
    }, [])
    
    return {
        toolbarData,
        setToolbarData
    }
}