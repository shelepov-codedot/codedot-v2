import {defineConfig} from 'sanity'
import {deskTool, getTypeNamesFromFilter} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'codedotV2',
  title: 'Codedot V2',

  projectId: 'c6ki8epl',
  dataset: 'production',
  apiVersion: '2021-08-31',
  token: 'sanity-auth-token',

  plugins: [
    deskTool({
      name: 'codedotV2',
      title: 'Desk Tool',
      router: {
        name: 'sections',
        route: '/sections',
      },
      structure: (S) => {
        const sectionNames = [
          'Header',
          'hero',
          'Cases',
          'Counters',
          'CasesPage',
          'TextHero',
          'Dignity',
          'Services',
          'Technologies',
          'Review',
          'Code',
          'Footer',
          'AboutHero',
          'Roadmap',
          'OurMission',
          'Careers',
          'Jobs',
          'Benefits',
          'ServiceHero',
          'Offer',
          'Digital',
          'Expect',
          'JobHero',
          'JobText',
          'OurServices',
          'ProjectHero',
          'ProjectTextImage',
          'ProjectText',
          'ProjectImages',
          'ProjectGallery',
        ]

        const sectionItems = sectionNames.map((sectionType) =>
          S.listItem()
            .title(sectionType)
            .child(
              S.documentTypeList(sectionType)
                .title('All ' + sectionType + ' Documents')
                .filter(`_type == "${sectionType}"`)
            )
        )

        const pageItems = S.documentTypeList('page').title('All Pages').filter(`_type == "page"`)

        return S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('All Sections')
              .child(S.list().title('All Sections').items(sectionItems)),
            S.listItem().title('Pages').child(pageItems),
          ])
      },
    }),

    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
