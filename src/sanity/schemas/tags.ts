import { defineField, defineType } from "sanity";

export default defineType({
  name: 'tag',
  type: 'document',
  title: 'Tags',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'name',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'name',
      },
    }),
  ],
})
