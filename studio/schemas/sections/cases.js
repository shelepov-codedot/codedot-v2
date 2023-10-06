export default {
  name: 'Cases',
  type: 'document',
  title: 'Cases',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Case Title',
    },
    {
      name: 'casesList',
      type: 'array',
      title: 'Cases List',
      of: [
        {
          name: 'casesItem',
          type: 'object',
          title: 'Cases Item',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Case Name',
            },
            {
              name: 'category',
              type: 'string',
              title: 'Case Category',
            },
            {
              name: 'image',
              type: 'image',
              title: 'Case Image',
            },
            {
              name: 'slug',
              title: 'Slug',
              type: 'slug',
              options: {
                source: 'title',
                maxLength: 96,
              },
            },
          ],
        },
      ],
    },
  ],
}
