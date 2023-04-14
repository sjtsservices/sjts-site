import { api } from '@/utils/api'
import { Skeleton } from 'antd';
import React from 'react'
import CountryList from '../country/CountryList';
import { Country } from '@prisma/client';
import UpdateCurrencyRate from '../country/UpdateCurrencyRate';
import VirtualList from 'rc-virtual-list';

const CurrencyTab = () => {
    const { data: countries, isLoading } = api.country.list.useQuery({});
    return (
        <div className="container mx-auto flex flex-col items-center">
            <div className="max-w-xl w-full">
                <div className="flex items-center justify-end w-full mb-5">
                    <UpdateCurrencyRate />
                </div>
                <div className='max-w-xl'>

                    <Skeleton paragraph={{ rows: 2 }} active loading={isLoading}>
                        <CountryList countries={countries as Country[]} />
                        
                    </Skeleton>
                </div>
            </div>
        </div>
    )
}

export default CurrencyTab