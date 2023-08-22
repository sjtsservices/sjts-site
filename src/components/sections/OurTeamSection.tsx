import { Button } from 'antd'
import { nanoid } from 'nanoid'
import React from 'react'
import SectionTitle from '../SectionTitle'
import Link from 'next/link'

export type OurTeamSectionProps = {
    all?: boolean,
    showImage?: boolean
}

export type TeamCardProps = {
    name: string,
    jobTitle: string,
    imageUrl: string,
    showImage?: boolean
}

const teamData: TeamCardProps[] = [
    {
        name: 'Mr. Vijay Kumar Tripathi',
        jobTitle: 'Director',
        imageUrl: '/assets/images/team/pic07.jpg'
    },
    {
        name: 'Mrs. Geeta Tripathi',
        jobTitle: 'CEO',
        imageUrl: '/assets/images/team/geeta.jpg'
    },
    {
        name: 'Mr. Rahul',
        jobTitle: 'Project Manager & Sr. Software Engineer',
        imageUrl: '/assets/images/team/durga.png'
    },
    {
        name: 'Mr. Shankar Sharan Sharma',
        jobTitle: 'Assistant Manager',
        imageUrl: '/assets/images/team/shankar.jpg'
    },
    {
        name: 'Mr. Navneet',
        jobTitle: 'Programmer Analyst-eProcurement System',
        imageUrl: '/assets/images/team/navneet.png'
    },
    {
        name: 'Mr. Sanjay',
        jobTitle: 'Manager & Sr. Software Engineer',
        imageUrl: '/assets/images/team/sanjay.jpg'
    },
    {
        name: 'Ms. Arunima',
        jobTitle: 'Programmer Analyst-eProcurement System',
        imageUrl: '/assets/images/team/arunima.jpg'
    },
    {
        name: 'Ms. Ruchi',
        jobTitle: 'Programmer Analyst-GEM',
        imageUrl: '/assets/images/team/ruchi.jpg'
    },

]

const shortTeamData: TeamCardProps[] = [
    {
        name: 'Mr. Vijay Kumar Tripathi',
        jobTitle: 'Director',
        imageUrl: '/assets/images/team/pic07.jpg'
    },
    {
        name: 'Mrs. Geeta Tripathi',
        jobTitle: 'CEO',
        imageUrl: '/assets/images/team/geeta.jpg',
    },
]
export const TeamCard = ({ name, jobTitle, imageUrl, showImage }: TeamCardProps) => {
    return (
        <div className="flex border-gray-300 border-solid border max-w-lg w-full">
           {
            showImage &&  <div className="w-52 h-40 bg-center bg-no-repeat bg-cover " style={{ backgroundImage: `url(${imageUrl})`, width: '208px' }}></div>
           }
            <div className="w-full p-5">
                <p className='text-xl serif font-bold'>{name}</p>
                <p className='text-xs text-gray-500 capitalize'>{jobTitle}</p>
            </div>
        </div>
    )
}

const OurTeamSection = ({ all = false, showImage=false }: OurTeamSectionProps) => {
    const tData = all ? teamData : shortTeamData;
    return (
        <section className='py-20 px-5'>
            <div className="container mx-auto space-y-10">
                {
                    !all && <div className='flex justify-between items-center'>
                        <SectionTitle title="We Support Your Dream" name="Our Team" />
                        <Link href={'/team'}><Button type="primary" size='large'>All Members</Button></Link>
                    </div>
                }

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
                    {
                        tData.map(data => {
                            return <TeamCard key={nanoid()} showImage={showImage} {...data} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default OurTeamSection