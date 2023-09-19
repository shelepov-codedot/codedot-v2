export default {
  name: 'ProjectHero',
  type: 'document',
  title: 'ProjectHero',
  fields: [
    {
      name: 'projectTitle',
      type: 'string',
      title: 'Project Title',
    },
    {
      name: 'projectTextItems',
      type: 'array',
      title: 'Project Text Items',
      of: [
        {
          name: 'projectTextItem',
          type: 'object',
          title: 'Project Text Item',
          fields: [
            {
              name: 'projectTextName',
              type: 'string',
              title: 'Project Text Name',
            },
            {
              name: 'projectText',
              type: 'text',
              title: 'Project Text',
            },
          ],
        },
      ],
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
    },
  ],
}
