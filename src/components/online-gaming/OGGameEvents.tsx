import React from 'react';
import OGSectionTitle from './OGSectionTitle';
import OGNoEventsFound from './OGNoEventsFound';
import { type GameEvent } from '@prisma/client';
import { Card } from 'antd';
import { nanoid } from 'nanoid';
import  { OGEventCardLoading } from './OGEventCard';
import OGEventSquareCard from './OGEventSquareCard';
import { type GameEventType } from '@/schema/GameEvent.schema';

export type OGGameEventsProps = {
  loading?: boolean,
  events: GameEventType[],
}

const Title = () => {
  return <div className="grid place-items-center mb-10">
    <OGSectionTitle title="Our Game Events" />
  </div>
}

const OGGameEvents = ({
  loading,
  events
}: OGGameEventsProps) => {

  if (loading) {
    return <>
      <Title />
      <div className="grid grid-cols-1 max-w-3xl mx-auto gap-5">
        {
          Array(3).fill(null).map(v => {
            return <OGEventCardLoading key={nanoid()} />
          })
        }
      </div>
    </>
  }

  if (events.length <= 0 && !loading) {
    return <>
      <Title />
      <OGNoEventsFound />
    </>;
  }

  return (
    <div className=''>
      <Title />
      <div className="space-y-5 max-w-3xl mx-auto ">
        {
          events.map(val => {
            return <OGEventSquareCard key={nanoid()} event={val}/>
          })
        }
      </div>
    </div>
  )
}

export default OGGameEvents