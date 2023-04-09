import React from 'react'
import { Element } from 'react-scroll'
import CommingSoon from '~/components/CommingSoon'
import CDContact from '~/components/creative-design/CDContact'
import CDHero from '~/components/creative-design/CDHero'
import CDKeyPoint from '~/components/creative-design/CDKeyPoint'
import CDServices from '~/components/creative-design/CDServices'
import CDWhyChooseUs from '~/components/creative-design/CDWhyChooseUs'

export function getStaticProps() {
  return {
    props: {

    }
  }
}

const Entertainment = () => {
  return (
    <>
      <CDHero />
      <div className="container mx-auto px-5">
        <div className='mt-20'><CDServices /></div>
      </div>
        <div className='mt-20'><CDWhyChooseUs /></div>
        <div className='mt-20 container mx-auto px-5'><CDKeyPoint /></div>
        <Element name="cdcontact"><div className='mt-20 container mx-auto px-5'><CDContact /></div></Element>
    </>
  )
}

export default Entertainment