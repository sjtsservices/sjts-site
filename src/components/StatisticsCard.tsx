import { Card } from 'antd'
import Link from 'next/link';
import React from 'react'


export type StatisticsCardProps = {
    value?: number,
    icon?: any,
    title?: string,
    loading?: boolean,
    link?: string
}

const StatisticsCard = ({
    icon,
    value,
    title,
    loading,
    link
}: StatisticsCardProps) => {
    return (
        <Link className='w-full' href={link||'#'}>
            <Card className=' w-full hover:shadow-2xl hover:shadow-gray-300 transition-all duration-200' loading={loading}>
                <div className="flex gap-5">
                    <div className="flex items-center ">{icon}</div>
                    <div className="">
                        <div className='text-4xl font-bold'>{value||0}</div>
                        {
                            title && <div className='text-gray-400 '>{title}</div>
                        }
                    </div>
                </div>
            </Card>
        </Link>
    )
}

export default StatisticsCard