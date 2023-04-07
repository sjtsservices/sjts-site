import { Card, CardProps } from 'antd'
import { CardInterface } from 'antd/es/card'
import React from 'react'

const OGPaper = (props: CardProps) => {
  return (
    <Card {...props} className={`border border-indigo-500 bg-primary/10 backdrop-blur-sm ${props.className||''}`}>
        {props.children}
    </Card>
  )
}

export default OGPaper