import { GameEvent } from '@prisma/client'
import React from 'react'
import OGPaper from './OGPaper'
import { Skeleton } from 'antd'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export type OGEventCardProps = {
    event?: GameEvent,
    loading?: boolean,
}


export const OGEventCardLoading = () => {
    return <OGPaper>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className='aspect-square md:aspect-4/3 '><Skeleton.Image active={true} /></div>
            <div className="col-auto md:col-start-2 md:col-end-4 ">
                <Skeleton active={true} />
            </div>
            <div className="col-auto md:col-start-4 md:col-end-5 space-y-2">
                <Skeleton.Input active={true} />
                <Skeleton.Button active={true} />
            </div>
        </div>
    </OGPaper>
}

const OGEventCard = ({
    event,
    loading
}: OGEventCardProps) => {
    const defaultImage = '/assets/images/game-placeholder.jpg';

    return (
        <OGPaper role="button">
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
                <div className='aspect-4/3 bg-cover bg-no-repeat bg-center rounded-xl' style={{ backgroundImage: `url(${defaultImage})` }} ></div>
                <div className="col-auto md:col-start-2 md:col-end-4 py-3">
                    <a title={event?.title} href={event?.link} className='text-xl text-white'>{event?.title}</a>
                    <p>Closed {dayjs(event?.expiredAt).fromNow()}</p>
                </div>
                <div className="col-auto md:col-start-4 md:col-end-5"></div>
            </div>
        </OGPaper>
    )
}

export default OGEventCard