import React from 'react'
import HeroSection from '../HeroSection'
import OGCtaButton from './OGCtaButton'
import ScrollTo from '../ScrollTo'

const OGHeroSection = () => {
    const heroImage = '/assets/images/gaming-hero.webp'
    return (
      <HeroSection
      image={heroImage}
      overlayColorClass='bg-gradient-to-b from-primary/0 via-primary/30 to-primary-dark'
      title={<h1 className='text-4xl md:text-6xl'>Join the Fun and Compete in Our <br></br> <span className='text-primary'>Online Game Tournaments!</span></h1>}
      type="center"
      desc="Get ready to put your gaming skills to the test in our exciting online game tournaments! Whether you're a casual gamer or a seasoned pro, our tournaments offer a chance to compete against players from around the world and win amazing rewards. From popular titles like Fortnite and Call of Duty to niche favorites like Rocket League and Valorant, we've got a tournament for every type of gamer. So sign up today and start playing!"
    //   action={<><Button type="primary" size="large">Browse Games</Button></>}
      action={<> <ScrollTo name="games"><OGCtaButton>Browse Games</OGCtaButton></ScrollTo></>}
      />
    )
}

export default OGHeroSection