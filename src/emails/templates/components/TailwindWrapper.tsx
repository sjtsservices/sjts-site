import { Tailwind } from '@react-email/tailwind'
import React, { PropsWithChildren } from 'react'

const TailwindWrapper = (props: PropsWithChildren) => {
  return (
    <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: '#4338ca',
          },
        },
      },
    }}
  >
    <div className="w-full flex justify-center items-center px-5 ">
      {props.children}
    </div>
  </Tailwind>
  )
}

export default TailwindWrapper