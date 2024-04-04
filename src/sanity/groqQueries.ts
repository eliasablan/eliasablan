export const getPostsQuery = `*[_type=='post'] | order(_createdAt desc)[0..9] {
    _id,
    title,
    "slug":slug.current,
    _createdAt
  }`

export const getProjectsQuery = `*[_type=='project'] | order(_updatedAt desc)[0..9] {
    slug,
    status,
    name,
    short_description,
    logo,
    tech_tools
  }`

export const getTagsQuery = `*[_type=='tag'] | order(_updatedAt desc)[0..9] {
    "slug":slug.current,
    name,
  }`
