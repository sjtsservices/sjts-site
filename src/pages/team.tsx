import Head from 'next/head'
import React from 'react'
import MetaTags from '~/components/MetaTags'
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
      <Head>
        <MetaTags
          title="Meet Our Expert Team - Aryan Intl"
          desc="Get to know the talented and experienced individuals who make up our team. Learn about their unique skills and expertise in Consulting & Technical field, and discover how they can help take your business to the next level."
          image="/assets/images/pages/aryanintl-team.webp"
        />
      </Head>
      <PageHeader title='Our Team' />

      <div className="container px-5 py-20 mx-auto">
        <KeyPointSection />
      </div>
      <div className="container px-5 py-20 mx-auto" >
        <OurTeamSection all={true} />
      </div>

      <MissionVisionSection />

    </>
  )
}

export default TeamPage