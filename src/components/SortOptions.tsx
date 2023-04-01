import { Button, Dropdown } from 'antd'
import { nanoid } from 'nanoid'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { FaSort } from 'react-icons/fa'
import useQueryData from '~/lib/hooks/useQueryData'
import { SortData } from '~/lib/providers/DashboardProvider'

export type SortOptionsProps = {
    options: SortData[],
    defaultLable: string
}

const SortOptions = ({options, defaultLable}: SortOptionsProps) => {
    const router = useRouter();
    const {sort} = useQueryData();


    const letSort = (sortData: SortData)=>{
        const {sortBy, sortOrder} = sortData;
        void router.push({
            href: './',
            query: {sortBy, order: sortOrder}
        })
    }
    const currentOption = sort ? options.find(val => (val.sortBy === sort.sortBy)&&(val.sortOrder === sort.sortOrder) ): undefined;

    const generateKey = (sd: SortData) => {
        return `${sd.sortBy}_${sd.sortOrder}`;
    }
    
  return (
    <Dropdown 
    trigger={['click']}
    menu={{items: (options||[]).map(sd => {
        return {
            key: generateKey(sd),
            label: sd.lable,
            onClick: () => letSort(sd)
        }
    }),
    activeKey: currentOption ? generateKey(currentOption) : undefined,
    
}}
    >
        <Link href={{query: currentOption && {sortBy: currentOption.sortBy, order: currentOption.sortOrder}}}><Button icon={<span className='anticon'><FaSort/></span>} >{currentOption ? currentOption.lable : defaultLable}</Button></Link>
    </Dropdown>
  )
}

export default SortOptions