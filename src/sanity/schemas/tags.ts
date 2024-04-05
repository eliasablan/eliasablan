import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'tag',
  type: 'document',
  title: 'Tags',
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
      },
    }),
  ],
})
