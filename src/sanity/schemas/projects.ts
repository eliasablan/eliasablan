import { defineField, defineType } from 'sanity'
import { preview } from 'sanity-plugin-icon-picker'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
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
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'status',
      type: 'string',
      title: 'Status',
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
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'iconPicker',
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
  ],
})
