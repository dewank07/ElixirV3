import React from "react";
import { AnimatedShinyTextDemo } from "./AnimatedShinyBtn";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const PageHeading = ({
   smallHeading,
  longHeading,
  link,
}: {
  smallHeading: string;
  longHeading: string;
  link?: string;
}) => {
  return (
    <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
      {/* <AnimatedShinyTextDemo text={smallHeading} link={link} /> */}
      <TextGenerateEffect words={longHeading} className='text-center text-[20px] md:text-2xl ' />
    </div>
  );
};

export default PageHeading;
