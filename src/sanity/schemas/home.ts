import { HomeIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'
import {
  OGMediaEditor,
  OGMediaIcon,
} from '@/components/sanity/OGMediaEditor'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: HomeIcon,
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
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'Used for the <meta> title tag for SEO.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.min(8).max(60),
      fieldset: 'seo',
    }),
    defineField({
      name: 'seo_description',
      description: 'Used for the <meta> description tag for SEO.',
      title: ' SEO Description',
      type: 'text',
      validation: (rule) => rule.min(70).max(155),
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
      name: 'overview',
      description: 'Set your homepage content here.',
      title: 'Page Content',
      type: 'array',
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
      validation: (rule) => rule.required(),
      group: 'content',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title: title || 'Home',
      }
    },
  },
})
