
import React from 'react'
import OGSectionTitle from './OGSectionTitle'
import { nanoid } from 'nanoid'
import { Skeleton } from 'antd'
import OGNoEventsFound from './OGNoEventsFound'
import OGEventSquareCard from './OGEventSquareCard'
import { GameEventType } from '@/schema/GameEvent.schema'

export type OGEventGridProps = {
    events: GameEventType[],
    loading?: boolean
}

const Title = () => {
    return <div className="grid place-items-center mb-10">
      <OGSectionTitle title="Our Game Events" />
    </div>
  }

const OGEventGrid = ({
    events,
    loading
}: OGEventGridProps) => {

    if (loading) {
        return <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  max-w-3xl mx-auto gap-5">
            {
              Array(3).fill(null).map(v => {
                return <div className='aspect-4/3 max-w-xs flex items-center justify-center' key={nanoid()}>
                    <Skeleton.Image/>
                </div>
              })
            }
          </div>
        </>
      }
    
      if (events.length <= 0 && !loading) {
        return <>
          <OGNoEventsFound />
        </>;
      }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {
            events.map(value => {
                return <OGEventSquareCard key={nanoid()} event={value} />
            })
        }
    </div>
  )

}

export default OGEventGrid