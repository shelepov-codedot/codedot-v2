export default {
  name: 'Technologies',
  type: 'document',
  title: 'Technologies',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Technologies Title',
    },
    {
      name: 'technologiesList',
      type: 'array',
      title: 'Technologies List',
      of: [
        {
          name: 'technologiesItem',
          type: 'object',
          title: 'Technologies Item',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Technologies Name',
            },
            {
              name: 'subtechnologiesList',
              type: 'array',
              title: 'subtechnologieItem',
              of: [
                {
                  name: 'subtechnologieItem',
                  type: 'string',
                  title: 'Subtechnologie Item',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
