"use client";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import RecentProjects from "@/components/RecentProjects";
import { GlobeSection } from "@/components/GlobeSection";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoHero from "@/public/Elixir-logo.png";
import useEventApi from "@/hooks/useEventApi";

const Home = () => {
  useEventApi();

  return (
    <div className='max-w-7xl w-full'>
      <motion.div className='hidden  md:block absolute -rotate-12 top-96 -right-16  z-10 '>
        <Image src={LogoHero} height={300} width={300} alt='tect' className='rounded-md' />
      </motion.div>
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <GlobeSection />
      {/* <Experience /> */}
      {/* <Approach /> */}
    </div>
  );
};

export default Home;
