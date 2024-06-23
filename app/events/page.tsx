"use client";

import { AnimatedShinyTextDemo } from "@/components/AnimatedShinyBtn";
import EventsCard from "@/components/EventsCard";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import useEventApi from "@/hooks/useEventApi";
import { useSelector } from "react-redux";
type Event = {
  id: number;
  name: string;
  event_summary: string;
  img_link: string;
  club: string;
  date: string;
  form_link: string;
};

const page = () => {
  const events = useSelector((store: any) => store?.event?.events);
  useEventApi();

  return (
    <div className='pt-20 relative z-10 '>
      <div className='flex flex-col items-center justify-center relative z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <AnimatedShinyTextDemo text={"Our Events"} />
          <TextGenerateEffect
            words='WHERE TECH MEETS THE CREATIVITY'
            className='text-center text-[40px] md:text-5xl lg:text-2xl'
          />
        </div>
        <div className='flex flex-wrap justify-center items-stretch gap-16 pt-10'>
          {events?.map((event: Event) => (
            <EventsCard
              key={event.id}
              title={event.name}
              description={event.event_summary}
              eventName={event.name}
              eventImage={event.img_link}
              clubName={event.club}
              clubImage='https://via.placeholder.com/25'
              deadline={event.date}
              formLink={event.form_link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
