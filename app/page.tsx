"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { GlobeSection } from "@/components/GlobeSection";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoHero from "@/public/Elixir-logo.png";

const Home = () => {
  return (
    <main className='relative  bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        {/* <FloatingNav navItems={navItems} /> */}
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
        <Footer />
      </div>
    </main>
  );
};

export default Home;
