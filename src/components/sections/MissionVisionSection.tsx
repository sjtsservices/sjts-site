import React from 'react'
import {TbTargetArrow} from 'react-icons/tb'

const content = {
    bgImage: '/assets/images/mission-vision.webp',
    mission: 'To develop learning, governance, and empowerment systems that are responsive to the individual and social developmental needs of the people by bridging the Digital Divide. To champion the cause of life-long learning with developmental orientation. ',
    vision: 'To bridge the Digital and Knowledge Divide through world-class, value-based learning, governance, and empowerment systems that meet the developmental needs of individuals and society'
}

const MVCard = ({title, desc, isHighLight=false}: {title: string, desc: string, isHighLight?: boolean}) => {
    return (
        <div className={`${isHighLight?'text-white bg-primary': 'bg-white'} flex p-5 gap-3 max-w-lg w-full shadow-2xl rounded-lg`}>
            <div className="flex-grow-0">
                <TbTargetArrow className={`${isHighLight ? '' : 'text-primary'} text-5xl `}/>
            </div>

            <div className='space-y-2'>
                <h3 className='text-2xl serif'>{title}</h3>
                <p className='leading-relaxed'>{desc}</p>
            </div>
        </div>
    )
}

const MissionVisionSection = () => {
  return (
    <section className='bg-no-repeat bg-cover bg-center w-full py-20 mb-10 relative min-h-[300px] flex justify-center' style={{backgroundImage: `url(${content.bgImage})`}}>
        <div className="relative md:absolute container mx-auto px-5 flex flex-col md:flex-row gap-5 justify-center items-stretch md:translate-y-1/2">
            <MVCard title='Our Vision' desc={content.vision}/>
            <MVCard title='Our Mission' desc={content.mission} isHighLight={true}/>
        </div>
    </section>
  )
}

export default MissionVisionSection