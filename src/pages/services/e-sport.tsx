import { Card } from 'antd'
import { GameEventDemoData } from 'data/GameEventDemoData'
import React from 'react'
import { Element } from 'react-scroll'
import OGAboutSection from '~/components/online-gaming/OGAboutSection'
import OGCtaButton from '~/components/online-gaming/OGCtaButton'
import OGEventGrid from '~/components/online-gaming/OGEventGrid'
import OGGameEvents from '~/components/online-gaming/OGGameEvents'
import OGHeroSection from '~/components/online-gaming/OGHeroSection'
import OGHowItWorks from '~/components/online-gaming/OGHowItWorks'
import OGSectionTitle from '~/components/online-gaming/OGSectionTitle'



const ESportPage = () => {
  return (
    // <div><CommingSoon/></div>
    <>
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