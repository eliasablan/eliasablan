import { defineField, defineType } from 'sanity'
import { preview } from 'sanity-plugin-icon-picker'
import {
  OGMediaEditor,
  OGMediaIcon,
} from '@/components/sanity/OGMediaEditor'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => [Rule.required().min(8).max(30)],
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      validation: (Rule) => [Rule.required()],
      description: 'PNG format',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'dark_logo',
      type: 'image',
      title: 'Dark Logo',
      description: 'PNG format',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
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
    defineField({
      name: 'status',
      type: 'string',
      title: 'Status',
      validation: (Rule) => [Rule.required()],
      options: {
        list: [
          { title: 'Development', value: 'development' },
          { title: 'Completed', value: 'completed' },
          { title: 'Deployed', value: 'deployed' },
        ],
      },
      initialValue: 'development',
    }),
    defineField({
      name: 'short_description',
      type: 'text',
      title: 'Short description',
      validation: (Rule) => [Rule.required().min(50).max(155)],
    }),
    defineField({
      name: 'description',
      type: 'array',
      title: 'Long description',
      of: [
        { type: 'block' },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) => [Rule.required()],
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'urls',
      type: 'array',
      title: 'URL Links',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Text',
              validation: (Rule) => [Rule.required()],
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              validation: (Rule) => [Rule.required()],
            },
            {
              name: 'icon',
              type: 'iconPicker',
              title: 'Icon',
              validation: (Rule) => [Rule.required()],
              options: {
                providers: ['fa', 'mdi', 'hi', 'fi', 'si'],
                outputFormat: 'react',
              },
            },
          ],
          preview: {
            select: {
              title: 'text',
              subtitle: 'url',
              icon: 'icon.name',
            },
            prepare(selection) {
              const { title, subtitle, icon } = selection
              return {
                title: title,
                subtitle: subtitle,
                media: preview(icon),
              }
            },
          },
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
      name: 'tech_tools',
      type: 'array',
      title: 'Technologies',
      of: [{ type: 'string' }],
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
