import { defineField, defineType } from 'sanity'
import { TagsIcon } from '@sanity/icons'

export default defineType({
  name: 'tag',
  type: 'document',
  title: 'Tags',
  icon: TagsIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'name',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => [Rule.required()],
      options: {
        source: 'name',
        maxLength: 50,
        isUnique: (value, context) =>
          context.defaultIsUnique(value, context),
      },
    }),
  ],
})
