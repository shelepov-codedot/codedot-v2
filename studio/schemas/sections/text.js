export default {
  preview: {
    select: {
      title: 'sectionTitle',
    },
  },

  name: 'TextHero',
  type: 'document',
  title: 'TextHero',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'textItems',
      type: 'array',
      title: 'Text Items',
      of: [
        {
          name: 'textItem',
          type: 'text',
          title: 'Text Item',
        },
      ],
    },
  ],
}
