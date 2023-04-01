import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import HeroSection from "~/components/sections/HeroSection";
import KeyPointSection from "~/components/sections/KeyPointSection";
import AboutUsSection from "~/components/sections/AboutUsSection";
import ServiceSection from "~/components/sections/ServiceSection";
import WhyChooseUsSection from "~/components/sections/WhyChooseUsSection";
import OurTeamSection from "~/components/sections/OurTeamSection";
import MissionVisionSection from "~/components/sections/MissionVisionSection";

export function getStaticProps() {
  return {
    props: {

    }
  }
}

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>SJTS: Your One-Stop Solution For All Your Needs</title>
        <meta name="description" content="Our company offers expert advice and great solutions for your needs. We pride ourselves on being a top choice for businesses and individuals looking for reliable, efficient services. With our commitment to excellence, you can trust us to deliver results. Explore our site today and discover why we're the right choice for you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <HeroSection />
        <div className="container mx-auto px-5">
          <div className="py-20"><KeyPointSection /></div>
          <div className="pb-20">
            <AboutUsSection />
          </div>

          <div className="pb-20"><ServiceSection/></div>

        </div>
          <WhyChooseUsSection/>
          <OurTeamSection/>
          <MissionVisionSection/>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};
