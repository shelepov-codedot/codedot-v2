export default {
  preview: {
    select: {
      title: 'sectionTitle',
    },
  },

  name: 'Footer',
  type: 'document',
  title: 'Footer',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'textFooter',
      type: 'text',
      title: 'Footer Text',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'socailItems',
      type: 'array',
      title: 'Social Items',
      of: [
        {
          name: 'socialItem',
          type: 'object',
          title: 'Social Item',
          fields: [
            {name: 'link', type: 'string', title: 'Link'},
            {name: 'socialIcon', type: 'image', title: 'Social Icon'},
          ],
        },
      ],
    },
    {
      name: 'imageAside',
      type: 'image',
      title: 'Image Aside',
    },
  ],
}
