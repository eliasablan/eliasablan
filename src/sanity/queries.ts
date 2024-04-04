import { client } from './utils'
import { getPostsQuery, getProjectsQuery } from './groqQueries'
import { Post, Project } from '../../sanity.types'

async function sanityFetch({
  query,
  tags,
}: {
  query: string
  tags: string[]
}): Promise<any> {
  return client.fetch(query, {
    tags,
  })
}

export async function getProjects(): Promise<Project[]> {
  return sanityFetch({
    query: getProjectsQuery,
    tags: ['project'],
  })
}

export async function getPosts(): Promise<Post[]> {
  return sanityFetch({
    query: getPostsQuery,
    tags: ['post'],
  })
}

// export const getPostData = async (slug) => {
//   const query = `*[_type=='post' && slug.current == "${slug}"][0] {
//     _id,
//     title,
//     description,
//     content,
//     og_image,
//     _createdAt
//   }`

//   const post = await sanityFetch({ query, tags: ['post'] })

//   return post
// }

// export const getProjectData = async (slug) => {
//   const query = `*[_type=='project' && slug.current == "${slug}"][0] {
//     name,
//     short_description,
//     description,
//     logo,
//     tech_tools,
//     urls,
//   }`

//   const project = await sanityFetch({ query, tags: ['project'] })

//   return project
// }
