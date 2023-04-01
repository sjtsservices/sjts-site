import { Table, TableColumnsType, TableProps } from 'antd'
import { TableCurrentDataSource } from 'antd/es/table/interface'
import { useRouter } from 'next/router';
import React from 'react'


export type PaginationData = {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
}


export type AppTableProps = {
    paginationData?: PaginationData
} & TableProps<any>

const AppTable = (props: AppTableProps) => {
    const router = useRouter();
    return (

        <>
            <Table
                pagination={props.pagination || props.paginationData && {
                    current: props.paginationData.currentPage,
                    total: props.paginationData.total,
                    pageSize: props.paginationData.perPage,
                    showQuickJumper: true,
                    onChange: (pageNumber, pageSize) => {
                        router.query.page = `${pageNumber}`
                        if (pageSize !== 10) {
                            router.query.pageSize = `${pageSize}`
                        }
                        void router.push(router)
                    }
                }}
                {...props}
            />
        </>
    )
}

export default AppTable