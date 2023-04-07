import { GameEventType } from '@/schema/GameEvent.schema'
import { Currency } from '@/utils/currency'
import { Button, Tag } from 'antd'
import dayjs from 'dayjs'
import React from 'react'

export type OGEventSquareCardProps = {
  event: GameEventType
}

const isExpired = (date: Date) => {
  return dayjs(date).isBefore(Date.now());
}

const EventCountDown = (props: {date: Date}) => {
  if (isExpired(props.date)) return <Tag color='red'>Expired</Tag>;
  return <Tag color="green">Registration Open</Tag>
}

const OGEventSquareCard = ({
  event
}: OGEventSquareCardProps) => {
  const defaultImage = '/assets/images/game-placeholder.jpg';


  return (
    <div className='max-w-xl rounded-lg aspect-4/3 relative bg-center bg-cover bg-no-repeat hover:shadow-xl hover:shadow-primary transition-all duration-200 bg-clip-border border-2 border-transparent border-solid hover:border-primary cursor-pointer hover:scale-105' style={{ backgroundImage: `url(${defaultImage})` }}>
      <div className="absolute bottom-0 left-0 w-full px-3 py-3 bg-gradient-to-b from-primary/30 to-primary-dark  backdrop-blur-sm space-y-1">
        <a href={event.link} title={event.title} className='text-white text-lg hover:underline capitalize'>{event.title}</a>
        <div className="flex items-center gap-5">
          {
            event.expiredAt && <>
              <span className='text-gray-200 text-xs'>{dayjs(event.expiredAt).format("MMM DD YY, hh:mm A")}</span>
              <span><EventCountDown date={event.expiredAt} /></span>
            </>
          }
        </div>
        {
          (event.Game && event.Game !== null) && <div className='mt-2 text-white'>{event.Game.title}</div>
        }

        <div className="mt-3 flex items-center justify-between">
          <span className='text-xl text-orange-400 '>{Currency.format(event.prize)}</span>
          {/* <Button type="primary" >Apply</Button> */}
        </div>
      </div>
    </div>
  )
}

export default OGEventSquareCard