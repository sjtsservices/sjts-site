/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type SortingInput } from '@/schema/schema-helpers/WithSortingSchema';
import { type NextRouter, useRouter } from 'next/router';
import { PaginateOptions } from 'prisma-pagination';
import { useEffect, useState } from 'react';

export type UseQueryDataProps = {
    paginate?: PaginateOptions,
    sort?: SortingInput,
    search?: string
}

export function getPaginationDataFromRoute(router: NextRouter){
    const out = {
        page: router.query.page && parseInt(router.query.page as string)||undefined,
        pageLimit: router.query.pageLimit && parseInt(router.query.pageLimit as string)||undefined
    }
    return out;
}
export default function useQueryData (params?: UseQueryDataProps){
    const router = useRouter();
    const [sort, setSort] = useState<SortingInput|undefined>();
    const [search, setSearch] = useState<string|undefined>();
    const [paginate, setPaginate] = useState<PaginateOptions|undefined>();

    useEffect(() => {
        const paginateResult = getPaginationDataFromRoute(router);
        const _search = router.query.search as string || params?.search;
        const _sortBy = router.query.sortBy as string || params?.sort?.sortBy;
        const _order = router.query.order as string || params?.sort?.sortOrder || 'asc';
        const _page = paginateResult.page || params?.paginate?.page;
        const _pageLimit = paginateResult.pageLimit || params?.paginate?.perPage;

        setSearch(_search);
        _sortBy ? setSort({sortBy: _sortBy, sortOrder: _order as 'asc'||'desc'}) : setSort(undefined)
        setPaginate({page: _page, perPage: _pageLimit});
        
    }, [router])

    return {
        paginate,
        search,
        sort
    }
}
