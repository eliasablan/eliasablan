import { defineField, defineType, defineArrayMember } from 'sanity'
import {
  OGMediaEditor,
  OGMediaIcon,
} from '@/components/sanity/OGMediaEditor'
import { ArchiveIcon } from '@sanity/icons'

export default defineType({
  name: 'post',
  type: 'document',
  title: 'Posts',
  icon: ArchiveIcon,
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
  ],
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your post.',
      type: 'string',
      title: 'Title',
      validation: (Rule) => [Rule.required().min(10).max(60)],
      group: 'content',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      description:
        'Used both for the <meta> description tag for SEO, and project subheader.',
      validation: (Rule) => [Rule.required().min(70).max(155)],
      group: 'content',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => [Rule.required()],
      options: {
        source: 'title',
        maxLength: 50,
        isUnique: (value, context) =>
          context.defaultIsUnique(value, context),
      },
    }),

    defineField({
      name: 'seo_title',
      type: 'string',
      title: 'SEO Title',
      description:
        'Used only for the <meta> title tag for SEO, only if specified.',
      validation: (Rule) => [Rule.min(50).max(155)],
      fieldset: 'seo',
    }),
    defineField({
      name: 'seo_description',
      type: 'text',
      title: 'SEO Description',
      description:
        'Used only for the <meta> description tag for SEO, only if specified.',
      validation: (Rule) => [Rule.min(50).max(155)],
      fieldset: 'seo',
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
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      validation: (Rule) => [Rule.required()],
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        }),
      ],
      group: 'content',
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
  ],
})
