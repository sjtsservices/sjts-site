import React from 'react'

export type WidgetIconProps = {
    icon: any,
    className: string
}
const WidgetIcon = ({
    icon,
    className
}: WidgetIconProps) => {
  return (
    <span className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl ${className}`}>
        {icon}
    </span>
  )
}

export default WidgetIcon