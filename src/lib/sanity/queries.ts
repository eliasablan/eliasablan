// 'use server'
// #region Imports
import { client } from './utils'
import { QueryParams } from 'next-sanity'
import {
  // Home and Settings
  getHomeQuery,
  getSettingsQuery,
  // Projects
  getProjectsQuery,
  getProjectsByTagQuery,
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
  GetTagsQueryResult,
  GetTagDataQueryResult,
} from '../../../sanity.types'
import { Locale } from '../i18n-config'
// #endregion

async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: { [key: string]: string | undefined }
  tags?: string[]
}) {
  return client.fetch<QueryResponse>(query, params as QueryParams, {
    cache:
      process.env.NODE_ENV === 'production' ? 'force-cache' : 'no-store',
    next: {
      tags,
    },
  })
}

// #region Home and Settings
export async function getHome(lang: Locale): Promise<GetHomeQueryResult> {
  return sanityFetch({
    query: getHomeQuery,
    params: { lang },
    tags: ['home'],
  })
}

export async function getSettings(
  lang: Locale
): Promise<GetSettingsQueryResult> {
  return sanityFetch({
    query: getSettingsQuery,
    params: { lang },
    tags: ['settings'],
  })
}
// #endregion

// #region Projects
export async function getProjects({
  tag = '',
  lang,
}: {
  tag?: string
  lang: Locale
}): Promise<GetProjectsQueryResult> {
  return sanityFetch({
    query: tag ? getProjectsByTagQuery : getProjectsQuery,
    params: { tag, lang },
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
// #endregion

// #region Posts
export async function getPosts({
  tag = '',
  lang,
}: {
  tag?: string
  lang: Locale
}): Promise<GetPostsQueryResult> {
  return sanityFetch({
    query: tag ? getPostsByTagQuery : getPostsQuery,
    params: { tag, lang },
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
export async function getTags(lang: Locale): Promise<GetTagsQueryResult> {
  // Ensure lang is always a string
  const safeLanguage = lang || 'en' // Default to 'en' if undefined

  return sanityFetch({
    query: getTagsQuery, // This is already defined in your groqQueries.ts with language filter
    params: { lang: safeLanguage },
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
