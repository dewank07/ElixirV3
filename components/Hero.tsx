import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { AnimatedShinyTextDemo } from "./AnimatedShinyBtn";

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      {/* <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='purple' />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='purple' />
      </div> */}

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <AnimatedShinyTextDemo text={"The Elixir Tech Community"} />
          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words='Transforming people into experienced developers'
            className='text-center text-3xl md:text-4xl lg:text-6xl'
          />
          {/* <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi! I&apos;m Adrian, a Next.js Developer based in Croatia.
          </p> */}
          <a href='#about'>
            <MagicButton title='Get Started' icon={<FaLocationArrow />} position='right' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
