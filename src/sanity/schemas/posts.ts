import { defineField, defineType } from 'sanity'
// import { MediaEditor } from '@catherineriver/sanity-plugin-generate-ogimage'
// import OGImageEditor from '@/components/sanity/OGImageEditor'

export default defineType({
  name: 'post',
  type: 'document',
  title: 'Posts',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
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
    // defineField({
    //   name: 'og_image',
    //   title: 'OG image',
    //   type: 'image',
    //   options: {
    //     sources: [
    //       {
    //         name: 'sharing-image',
    //         title: 'Generate Image',
    //         icon: () => <div>🎨</div>,
    //         component: (props) => (
    //           <MediaEditor
    //             {...props}
    //             darkMode={false}
    //             layouts={[OGImageEditor]}
    //           />
    //         ),
    //       },
    //     ],
    //   },
    // }),
  ],
})
