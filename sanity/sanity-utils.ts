import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: "48b35g43",
    dataset: "production",
    apiVersion: "2023-03-04",
  });
  return client.fetch(groq`*[_type=="project"]{
    _id,
    _createdAt,

    name,
    "slug":slug.current,
    "image":image.asset->url,

    url,
    content
  }`);
}

export async function getProject(slug: string) {}
