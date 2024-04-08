import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { iconPicker } from 'sanity-plugin-icon-picker'
import { generateOGImage } from '@catherineriver/sanity-plugin-generate-ogimage'
import OGImageEditor from '@/components/sanity/OGImageEditor'
import { schemaTypes } from '@/sanity/schemas'
import ToolMenu from '@/components/sanity/studio/ToolMenu'
import { pageStructure, singletonPlugin } from '@/sanity/plugins/settings'
import home from '@/sanity/schemas/home'
import settings from '@/sanity/schemas/settings'

const config = defineConfig({
  name: 'default',
  title: 'eliasablan | CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  apiVersion: '2024-01-01',

  plugins: [
    structureTool({
      structure: pageStructure([home, settings]),
    }),
    visionTool(),
    iconPicker(),
    generateOGImage({ layouts: [OGImageEditor] }),
    // Configures the global "new document" button, and document actions, to suit the Settings document singleton
    singletonPlugin([home.name, settings.name]),
  ],

  basePath: '/admin',

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {
      toolMenu: ToolMenu,
    },
  },
})

export default config
