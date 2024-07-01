import React from "react";
import NotesPageLayout from "@/layouts/NotesPageLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Notes",
};
function Notes() {
  return <NotesPageLayout />;
}
export default Notes;
