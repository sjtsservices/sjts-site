import React from 'react'

export type HeroSectionProps = {
    tagText?: string,
    image: string,
    title: React.ReactNode,
    desc?: React.ReactNode,
    overlay?: boolean,
    overlayColorClass?: string,
    type?: 'center'|'left'|'right',
    action?: React.ReactNode
}

const HeroSection = ({
    tagText = 'Aryan International LLC',
    image,
    title,
    desc,
    overlay= true,
    overlayColorClass='bg-gradient-to-r from-purple-700/30 to-indigo-900/30',
    type='center',
    action
}: HeroSectionProps) => {


  return (
    <div className='min-h-[calc(100vh-30px)] bg-center bg-no-repeat bg-cover flex items-center text-white relative' style={{ backgroundImage: `url(${image})` }}>
            <div className={`container mx-auto px-5 z-20 ${type === 'center' ? 'flex justify-center' : type==='right' ? 'flex justify-end': '' }`}>
                <div className={`max-w-xl ${type === 'center' ? 'flex flex-col items-center text-center' : type==='right' ? 'flex flex-col items-end': 'flex flex-col items-start' }`}>
                    <span className='bg-primary text-white px-3 py-2 mb-2 inline-block '>{tagText}</span>
                    <div className=' serif  mb-3'>{title}</div>
                    <p className='text-base leading-tight'>{desc}</p>
                    <div className={`flex justify-start mt-8 ${type === 'center' ? 'justify-center' : type==='right' ? 'justify-end': 'justify-start' }`}>
                        {action}
                    </div>
                </div>
            </div>
            {overlay && <div className={`absolute w-full h-full left-0 top-0  ${overlayColorClass}`}></div>}
        </div>
  )
}

export default HeroSection