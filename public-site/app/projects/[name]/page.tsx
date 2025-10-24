import { getProjects } from "@/lib/api"
import { notFound } from "next/navigation"
import ProjectDetailClient from "./projects-detail-client"

interface ProjectDetailPageProps {
  params: {
    name: string
  }
}

export async function generateStaticParams() {
  const data = await getProjects()
  return data.result.map((project) => ({
    name: encodeURIComponent(project.name),
  }))
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const data = await getProjects()
  const decodedName = decodeURIComponent(params.name)
  const project = data.result.find((p) => p.name === decodedName)

  if (!project) {
    return {
      title: "Project Not Found | SagalJet",
    }
  }

  return {
    title: `${project.name} | SagalJet Projects`,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "website",
      images: project.imageUrl,
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const data = await getProjects()
  const decodedName = decodeURIComponent(params.name)
  const project = data.result.find((p) => p.name === decodedName)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
