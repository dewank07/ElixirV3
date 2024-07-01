import React from "react";
import { Metadata } from "next";
import EventsPageLayout from "@/layouts/EventsPageLayout";
export const metadata: Metadata = {
  title: "Events",
};
const page = () => {
  return <EventsPageLayout />;
};

export default page;
