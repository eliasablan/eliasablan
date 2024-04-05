import { client } from './utils'
import { QueryParams } from 'next-sanity'
import {
  // Projects
  getProjectsQuery,
  getProjectDataQuery,
  // Posts
  getPostsQuery,
  getPostDataQuery,
  // Tags
  getTagsQuery,
  getTagDataQuery,
} from './groqQueries'
import {
  // Projects
  GetProjectsQueryResult,
  GetProjectDataQueryResult,
  // Posts
  GetPostsQueryResult,
  GetPostDataQueryResult,
  // Tags
  GetTagsQueryResult,
  GetTagDataQueryResult,
} from '../../sanity.types'

async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}) {
  return client.fetch<QueryResponse>(query, params, {
    next: {
      tags,
    },
  })
}

// Projects Queries
export async function getProjects(): Promise<GetProjectsQueryResult> {
  return sanityFetch({
    query: getProjectsQuery,
    tags: ['project'],
  })
}

export async function getProjectData(
  slug: string
): Promise<GetProjectDataQueryResult> {
  return await sanityFetch({
    query: getProjectDataQuery,
    params: { slug },
    tags: [`project:${slug}`],
  })
}

// Posts Queries
export async function getPosts(): Promise<GetPostsQueryResult> {
  return sanityFetch({
    query: getPostsQuery,
    tags: ['post'],
  })
}

export async function getPostData(
  slug: string
): Promise<GetPostDataQueryResult> {
  return await sanityFetch({
    query: getPostDataQuery,
    params: { slug: slug },
    tags: [`post:${slug}`],
  })
}

// Tags Queries
export async function getTags(): Promise<GetTagsQueryResult> {
  return sanityFetch({
    query: getTagsQuery,
    tags: ['tag'],
  })
}

export async function getTagData(
  slug: string
): Promise<GetTagDataQueryResult> {
  return await sanityFetch({
    query: getTagDataQuery,
    params: { slug: slug },
    tags: [`tag:${slug}`],
  })
}
