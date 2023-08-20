import React from 'react'
import DocImage from '~/components/DocImage'
import PageHead from '~/components/MetaTags'
import PageHeader from '~/components/PageHeader'
import PdfViewer from '~/components/applicant/PdfViewer'
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

      <PageHead
        title="Meet Our Expert Team - Aryan Intl"
        desc="Get to know the talented and experienced individuals who make up our team. Learn about their unique skills and expertise in Consulting & Technical field, and discover how they can help take your business to the next level."
        image="/assets/images/pages/aryanintl-team.webp"
      />

      <PageHeader title='Company Docs' />

      <div className="container px-5 py-20 mx-auto">
        <KeyPointSection />
      </div>

      <div className="container px-5 py-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <DocImage url='/assets/doc/lic-doc-1.jpg' title="Business License(1)" />
        </div>
        <div>
          <DocImage url='/assets/doc/lic-doc-2.jpg' title="Business License(2)" />
        </div>
      </div>

      {/* <div className="container px-5 py-20 mx-auto" >
        <OurTeamSection all={true} />
      </div> */}

      <MissionVisionSection />

    </>
  )
}

export default TeamPage