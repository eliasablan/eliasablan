import { defineField, defineType, defineArrayMember } from 'sanity'
import { ProjectsIcon } from '@sanity/icons'
import { preview } from 'sanity-plugin-icon-picker'
import {
  OGMediaEditor,
  OGMediaIcon,
} from '@/components/sanity/OGMediaEditor'

export default defineType({
  name: 'project',
  type: 'document',
  title: 'Projects',
  icon: ProjectsIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fieldsets: [
    {
      name: 'seo',
      title: 'SEO',
      description: 'Set up your metadata for SEO here.',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        modal: { type: 'popover' }, // Makes the modal type a popover
      },
    },
    {
      name: 'logo',
      title: 'Logo',
      description:
        'Light Mode logo is required. Dark Mode logo is optional.',
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: true, // Defines if the fieldset should be collapsed by default or not
        modal: { type: 'popover' }, // Makes the modal type a popover
      },
    },
  ],
  fields: [
    defineField({
      name: 'name',
      description:
        'This field is the name shown by your project and your <meta> title tag for SEO.',
      type: 'string',
      title: 'Name',
      validation: (Rule) => [Rule.required().min(10).max(60)],
      fieldset: 'seo',
      group: 'content',
    }),
    defineField({
      name: 'short_description',
      type: 'text',
      title: 'Short description',
      description:
        'This field is the short description given by your project and your <meta> description tag for SEO.',
      validation: (Rule) => [Rule.required().min(70).max(155)],
      fieldset: 'seo',
      group: 'content',
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
      fieldset: 'seo',
      group: 'content',
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
    defineField({
      name: 'logo',
      type: 'image',
      title: '☀️ Light Mode',
      validation: (Rule) => [Rule.required()],
      description:
        'If only Light Mode logo is set then it will work for both modes. ',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '☀️ Alternative Text',
        },
      ],
      group: 'content',
      fieldset: 'logo',
    }),
    defineField({
      name: 'dark_logo',
      type: 'image',
      title: '🌜 Dark Mode',
      description: 'If Dark Mode logo is set then they will alternate. ',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: '🌜 Alternative Text',
        },
      ],
      group: 'content',
      fieldset: 'logo',
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
      name: 'description',
      type: 'array',
      title: 'Project description',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              validation: (Rule) => [Rule.required()],
            },
          ],
        }),
      ],
      group: 'content',
    }),
    defineField({
      name: 'urls',
      type: 'array',
      title: 'URL Links',
      of: [
        defineArrayMember({
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
        }),
      ],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'tag' }],
        }),
      ],
    }),
    defineField({
      name: 'tech_tools',
      type: 'array',
      title: 'Technologies',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],
})
