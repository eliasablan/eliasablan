import { groq } from 'next-sanity'

// Home and Settings Queries
export const getHomeQuery = groq`*[_type=='home'][0] {
  _id,
  title,
  seo_description,
  og_image,
  overview
}`

export const getSettingsQuery = groq`*[_type=='settings'][0] {
  urls,
  footer
}`

// Posts Queries
export const getPostsQuery = groq`*[_type=='post'] | order(_createdAt desc)[0..9] {
  _id,
  title,
  "slug":slug.current,
  _createdAt
}`

export const getPostsByTagQuery = groq`*[_type=='post' && $slug in tags[]->slug.current] | order(_updatedAt desc)[0..9] {
  _id,
  title,
  "slug":slug.current,
  _createdAt
}`

export const getPostDataQuery = groq`*[_type=='post' && slug.current == $slug][0] {
  _id,
  title,
  description,
  content,
  og_image,
  _createdAt,
  tags[]->{
    _id,
    name,
    slug
  }
  }`

// Projects Queries
export const getProjectsQuery = groq`*[_type=='project'] | order(_updatedAt desc)[0..9] {
  slug,
  status,
  name,
  short_description,
  logo,
  dark_logo,
  tags[]->{
    _id,
    name,
    slug
  },
}`

export const getProjectsByTagQuery = groq`*[_type=='project' && $slug in tags[]->slug.current] {
  slug,
  status,
  name,
  short_description,
  logo,
  dark_logo,
  tags[]->{
    _id,
    name,
    slug
  },
}`

export const getProjectDataQuery = groq`*[_type=='project' && slug.current == $slug][0] {
  _id,
  name,
  short_description,
  description,
  logo,
  dark_logo,
  urls,
  og_image,
  tags[]->{
    _id,
    name,
    slug
  }
  }`

// Tags Queries
export const getTagsQuery = groq`*[_type=='tag'] | order(_updatedAt desc)[0..9] {
  slug,
  name,
  }`

export const getTagDataQuery = groq`*[_type=='tag' && slug.current == $slug][0] {
  name,
  slug
  }`
