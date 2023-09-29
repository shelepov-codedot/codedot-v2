import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity Project',

  projectId: 'c6ki8epl',
  dataset: 'production',
  apiVersion: '2021-08-31', // use a UTC date string
  token: 'sanity-auth-token', // or leave blank for unauthenticated usage

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
