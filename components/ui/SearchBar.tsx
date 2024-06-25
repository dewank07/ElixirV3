"use client";

import { useState } from "react";
import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { MentorData } from "@/constants/constants";

export function SearchBar({ mentors = [], setMentorData }: { mentors: any[]; setMentorData: (data: any) => void }) {
  const placeholders = [
    "Search for React",
    "Search for Frontend",
    "Search for Backend",
    "Search for Go",
    "Search for Devops",
  ];
  const getFilteredMentor = (searchTerm: string) => {
    const filteredMentors = MentorData.filter((mentor) => {
      const values = Object.values(mentor);
      return values.some(
        (value) => typeof value === "string" && value.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    });
    return filteredMentors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    const filteredMentors = getFilteredMentor(searchTerm);
    if (searchTerm.length === 0) {
      setMentorData(MentorData);
    } else if (filteredMentors.length === 0) {
      setMentorData([
        {
          name: "No Mentors Found",
          image: "/jsm-logo.png",
          description: "Please try a different search term",
          skills: "No skills found",
        },
      ]);
    } else {
      setMentorData(filteredMentors);
    }
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchTerm = "No Mentors Found";
    const filteredMentors = getFilteredMentor(searchTerm);

    if (filteredMentors.length === 1) {
      setMentorData(MentorData);
    }
  };
  return (
    <div className='flex flex-col justify-center my-10 items-center px-4 w-full'>
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
    </div>
  );
}
