import TestimonialsPageLayout from "@/layouts/TestimonialsPageLayout";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Testimonials",
};

const page = () => {
  return <TestimonialsPageLayout />;
};

export default page;
