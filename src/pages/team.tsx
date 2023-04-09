import React from 'react'
import PageHeader from '~/components/PageHeader'
import KeyPointSection from '~/components/sections/KeyPointSection'
import MissionVisionSection from '~/components/sections/MissionVisionSection'
import OurTeamSection from '~/components/sections/OurTeamSection'


export function getStaticProps() {
  return {
    props: {

    }
  }
}

const TeamPage = () => {
  return (
    <>
    <PageHeader title='Our Team'/>

    <div className="container px-5 py-20 mx-auto">
        <KeyPointSection/>
    </div>
    <div className="container px-5 py-20 mx-auto" >
        <OurTeamSection all={true} />
    </div>

    <MissionVisionSection/>
    
    </>
  )
}

export default TeamPage