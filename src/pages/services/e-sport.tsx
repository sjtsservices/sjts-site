import { GameEventDemoData } from 'data/GameEventDemoData'
import Head from 'next/head';
import React from 'react'
import { Element } from 'react-scroll'
import MetaTags from '~/components/MetaTags'
import OGAboutSection from '~/components/online-gaming/OGAboutSection'
import OGEventGrid from '~/components/online-gaming/OGEventGrid'
import OGHeroSection from '~/components/online-gaming/OGHeroSection'
import OGHowItWorks from '~/components/online-gaming/OGHowItWorks'
import OGSectionTitle from '~/components/online-gaming/OGSectionTitle'



const ESportPage = () => {
  return (
    // <div><CommingSoon/></div>
    <>
    <Head>
      <MetaTags 
      title="E-Sport Competition | Join Our Online Game Events | Aryan Intl"
      desc="Take part in our exciting online game events and compete with other gamers from around the world. Win big prizes and show off your skills in our E-Sport competitions. Join now and experience the thrill of competitive gaming with Aryan Intl."
      image = "/assets/images/pages/aryanintl-esport.webp"
      />
    </Head>
      <OGHeroSection />
      <div className="bg-primary-dark relative bg-center   " style={{ backgroundImage: `url(/assets/images/gaming-bg-pattern.png)` }}>
        <div className=' px-5 w-full bg-primary-dark/80 '>
          <div className="container mx-auto">
            <OGAboutSection />

            <div className="mt-20">
              <OGHowItWorks />
            </div>
            <div className="mt-20">
              <div className="flex items-center justify-between mb-10">
                <OGSectionTitle title="Our Events" />
                {/* <OGCtaButton>Browse More</OGCtaButton> */}
              </div>
             <Element name="games"> <OGEventGrid events={GameEventDemoData} loading={false} /></Element>
            </div>
          </div>
      <div className="h-20"></div>
        </div>
      </div>

    </>
  )
}

export default ESportPage