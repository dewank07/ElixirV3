import Image from "next/image";
import React from "react";
import { FollowerPointerCard } from "./ui/following-pointer";

const MentorCard = ({ data }: { data: any }) => {
  return (
    <div className='relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-80 w-60  rounded-2xl hover:duration-700 '>
      <div className='w-60 h-80 bg-gray-400 text-gray-800'>
        <Image src={data.image} width={240} height={320} alt='' className='object-cover w-full h-full' />
      </div>
      <div className='absolute bg-gray-50 -bottom-24 h-44 w-60 p-3 flex flex-col  group-hover:-bottom-0 group-hover:duration-600 duration-500'>
        <span className='text-gray-400 font-semibold text-xs'>{data.skills}</span>
        <span className='text-gray-800 font-bold text-2xl'>{data.name}</span>
        <p className='text-neutral-800 text-xs mt-1'>
          {data.description.length > 68 ? `${data.description.slice(0, 64)}...` : data.description}
        </p>
        <div className='my-2 w-full flex items-center justify-between gap-10 '>
          <a
            href={data.discordLink}
            className='px-4 py-2 rounded-md border border-black bg-white text-black-100 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'
          >
            Discord
          </a>
          <a
            href={data.LinkedinLink}
            className='px-4 py-2 rounded-md border border-black bg-white text-black-100 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200'
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
