export default {
  name: 'Expect',
  type: 'document',
  title: 'Expect',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'expectTitle',
      type: 'string',
      title: 'Expect Title',
    },
    {
      name: 'expectSubText',
      type: 'text',
      title: 'Expect Subtext',
    },
    {
      name: 'expectItems',
      type: 'array',
      title: 'Expect Items',
      of: [
        {
          name: 'expectItem',
          type: 'object',
          title: 'Expect Item',
          fields: [{name: 'expectText', type: 'text', title: 'Expect Text'}],
        },
      ],
    },
  ],
}
