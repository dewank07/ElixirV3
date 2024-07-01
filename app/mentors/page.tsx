import MentorPageLayout from "@/layouts/MentorPageLayout";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mentors",
};

const page = () => {
  return <MentorPageLayout />;
};

export default page;
