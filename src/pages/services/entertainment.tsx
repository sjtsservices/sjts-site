import Head from 'next/head'
import React from 'react'
import { Element } from 'react-scroll'
import CommingSoon from '~/components/CommingSoon'
import MetaTags from '~/components/MetaTags'
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
     <Head>
      <MetaTags 
      title="Graphic Design and Media Services | Boost Your Brand's Visibility| Aryan Intl"
      desc="Looking for high-quality graphic design and media services? Our team of experts offers a range of services, including graphic design, video editing, promotional video making, and more. With our help, you can boost your brand's visibility and reach a wider audience. Contact us today to learn more!"
      image = "/assets/images/pages/aryanintl-entertainment.webp"
      />
    </Head>
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