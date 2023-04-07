import React from 'react'
import OGPaper from './OGPaper';
import { nanoid } from 'nanoid';
import OGSectionTitle from './OGSectionTitle';
import OGDevider from './OGDevider';

const content = [
    {
        title: 'Select Event',
        desc: `Browse through our upcoming events and choose the one you're interested in.`
    },
    {
        title: 'Register on the Platform',
        desc: `Follow the registration link on the event page to create an account on the third-party platform hosting the event.`
    },
    {
        title: 'Join The Tournament',
        desc: `Once you've registered, join the tournament by following the instructions provided on the event page.`
    },
    {
        title: 'Play and win',
        desc: `Once you have successfully signed up for our tournament, it's time to compete with other players and try to win exciting rewards!`
    },
]

const StepCard = (props: { title: string, desc?: string, index: number }) => {
    return (
        <OGPaper className='relative max-w-md flex flex-col justify-center text-white'>
            <h2>{props.title}</h2>
            {
                props.desc && <p className='mt-3 text-indigo-200'>{props.desc}</p>
            }

            <div className="absolute left-0 top-0 w-full -translate-y-1/2 flex ">
                <span className='bg-gradient-to-r text-lg from-amber-500 to-pink-500 p-2 w-10 h-10 inline-flex items-center justify-center text-white font-bold rounded-full'>{props.index}</span>
            </div>
        </OGPaper>
    );
}


const OGHowItWorks = () => {
    return (
        <div className='container mx-auto'>
            <div className="flex flex-col items-center mb-10 spay-3 gap-5" >
                <OGSectionTitle title="How It Works" />
            </div>
            <div className=' grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-white '>
                {
                    content.map((c, index) => {
                        return (
                            <StepCard key={nanoid()} title={c.title} desc={c.desc} index={index + 1} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OGHowItWorks