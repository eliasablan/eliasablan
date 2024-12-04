import groq from 'groq'

// #region Home and Settings
export const getHomeQuery = groq`
  *[_type=='home'
  && language==$lang]
  [0]
  {
    _id,
    title,
    seo {...},
    overview
  }`

export const getSettingsQuery = groq`
  *[_type=='settings'
  && language==$lang]
  [0]
  {
    urls,
    footer
  }`
// #endregion

// #region Posts
export const getPostsQuery = groq`
  *[_type=='post'
  && language==$lang]
  | order(_createdAt desc)
  [0..9]
  {
    _id,
    title,
    "slug":slug.current,
    _createdAt
  }`

export const getPostsByTagQuery = groq`
  *[_type=='post'
  && language==$lang
  && $tag in tags[]->slug.current]
  | order(_createdAt desc)
  {
    _id,
    title,
    "slug":slug.current,
    _createdAt
  }`

export const getPostDataQuery = groq`
  *[_type=='post'
  && slug.current == $slug]
  [0]
  {
    _id,
    title,
    seo {...},
    content,
    _createdAt,
    tags[]->{
      _id,
      name,
      slug
    }
  }`
// #endregion

// #region Projects
export const getProjectsQuery = groq`
  *[_type=='project'
  && language==$lang]
  | order(_updatedAt desc)
  [0..9]
  {
    _id,
    name,
    "slug":slug.current,
    logo,
    dark_logo,
    status,
    short_description,
    tags[]->{
      _id,
      name,
      slug
    },
  }`

export const getProjectsByTagQuery = groq`
  *[_type=='project'
  && language==$lang
  && $tag in tags[]->slug.current]
  | order(_updatedAt desc)
  {
    _id,
    name,
    "slug":slug.current,
    logo,
    dark_logo,
    status,
    short_description,
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
  seo {...},
  tags[]->{
    _id,
    name,
    slug
  }
}`
// #endregion

// #region Tags
export const getTagsQuery = groq`*[_type == "tag" && (
  count(*[_type == "project" && references(^._id) && language == $lang]) > 0 ||
  count(*[_type == "post" && references(^._id) && language == $lang]) > 0
)] {
  ...,
  "projectCount": count(*[_type == "project" && references(^._id) && language == $lang]),
  "postCount": count(*[_type == "post" && references(^._id) && language == $lang])
}`

export const getTagDataQuery = groq`
  *[_type=='tag'
  && slug.current == $slug]
  [0]
  {
    name,
    slug
  }`
// #endregion
