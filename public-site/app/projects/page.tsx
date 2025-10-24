import type { Metadata } from "next";
import ProjectsClient from "./projects-client";
import { getProjects } from "@/lib/api";
export const metadata: Metadata = {
  title: "Design Templates ",
  description:
    "Browse our collection of professional design templates for printing. Order via WhatsApp from Hargeysa, Berbera, or Bur'o.",
  openGraph: {
    title: "Design Templates ",
    description:
      "Browse our collection of professional design templates for printing",
    type: "website",
  },
};

export default async function ProjectsPage() {
  const data = await getProjects();

  return <ProjectsClient projects={data.result} categories={data.categories} />;
}
