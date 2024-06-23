import PageHeading from "@/components/PageHeading";
import { SearchBar } from "@/components/ui/SearchBar";
import React from "react";

const MentorPageLayout = () => {
  return (
    <div className='pt-20 relative z-10'>
      <div className='flex flex-col items-center justify-center'>
        <PageHeading smallHeading='Connect with Mentors' longHeading='SEEK OUT FOR GUIDANCE' />
        <SearchBar />
        {/* {add cards here} */}
      </div>
    </div>
  );
};

export default MentorPageLayout;
