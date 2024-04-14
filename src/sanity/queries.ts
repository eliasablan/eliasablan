'use server'
// #region Imports
import { client } from './utils'
import { QueryParams } from 'next-sanity'
import {
  // Home and Settings
  getHomeQuery,
  getSettingsQuery,
  // Projects
  getProjectsQuery,
  getProjectDataQuery,
  // Posts
  getPostsQuery,
  getPostsByTagQuery,
  getPostDataQuery,
  // Tags
  getTagsQuery,
  getTagDataQuery,
} from './groqQueries'
import {
  GetHomeQueryResult,
  GetSettingsQueryResult,
  GetProjectsQueryResult,
  GetProjectDataQueryResult,
  GetPostsQueryResult,
  GetPostDataQueryResult,
  GetPostsByTagQueryResult,
  GetTagsQueryResult,
  GetTagDataQueryResult,
} from '../../sanity.types'
// #endregion

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
    cache:
      process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store',
    next: {
      tags,
    },
  })
}

// #region Home and Settings
export async function getHome(): Promise<GetHomeQueryResult> {
  return sanityFetch({
    query: getHomeQuery,
    tags: ['home'],
  })
}

export async function getSettings(): Promise<GetSettingsQueryResult> {
  return sanityFetch({
    query: getSettingsQuery,
    tags: ['settings'],
  })
}
// #endregion

// #region Projects

export async function getProjects(
  slug?: string
): Promise<GetProjectsQueryResult> {
  const params = slug ? { slug } : { slug: '' }
  const tags = slug ? ['project', 'tag'] : ['project']
  return sanityFetch({
    query: getProjectsQuery,
    params,
    tags,
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
// #endregion

// #region Posts
export async function getPosts(): Promise<GetPostsQueryResult> {
  return sanityFetch({
    query: getPostsQuery,
    tags: ['post'],
  })
}

export async function getPostsByTag(
  slug: string
): Promise<GetPostsByTagQueryResult> {
  return sanityFetch({
    query: getPostsByTagQuery,
    params: { slug },
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
// #endregion

// #region Tags
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
// #endregion
