import type { ProjectsResponse } from "./types"

const API_URL = "http://localhost:4000/api/project/get-projects"

export async function getProjects(): Promise<ProjectsResponse> {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store", // Always fetch fresh data
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.statusText}`)
    }

    const data: ProjectsResponse = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching projects:", error)
    throw error
  }
}

export async function getProjectsByCategory(categoryId: number): Promise<ProjectsResponse> {
  try {
    const data = await getProjects()

    // Filter projects by category
    const filteredProjects = data.result.filter((project) => project.categoryId === categoryId)

    return {
      ...data,
      result: filteredProjects,
    }
  } catch (error) {
    console.error("Error fetching projects by category:", error)
    throw error
  }
}
