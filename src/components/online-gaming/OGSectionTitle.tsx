import React from 'react'

export type OGSectionTitleProps = {
    title: string
}

const OGSectionTitle = ({title}: OGSectionTitleProps) => {
  return (
    <div className='my-2'><h2 className='text-4xl md:text-6xl bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent'>{title}</h2></div>
  )
}

export default OGSectionTitle