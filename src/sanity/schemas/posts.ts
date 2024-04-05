import { defineField, defineType } from 'sanity'
import {
  OGMediaEditor,
  OGMediaIcon,
} from '@/components/sanity/OGMediaEditor'

export default defineType({
  name: 'post',
  type: 'document',
  title: 'Posts',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => [Rule.required()],
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      validation: (Rule) => [Rule.required()],
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'reference',
          to: [{ type: 'tag' }],
        },
      ],
    }),
    defineField({
      name: 'og_image',
      title: 'OG image',
      type: 'image',
      options: {
        sources: [
          {
            name: 'sharing-image',
            title: 'Generate Image',
            icon: OGMediaIcon,
            component: OGMediaEditor,
          },
        ],
      },
    }),
  ],
})
