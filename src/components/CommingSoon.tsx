import React from 'react'

export type CommingSoonProps = {
    title?: string
}

const CommingSoon = ({
    title= 'This page is Under Development'
}: CommingSoonProps) => {
  return (
    <div className='h-[calc(100vh-50px)] grid place-content-center text-5xl px-5 bg-gradient-to-r from-pink-700 to-indigo-800 text-white'>
        <div className="max-w-xl"><h1 className='text-4xl text-center md:text-6xl'>{title}</h1></div>
    </div>
  )
}

export default CommingSoon