export default {
  name: 'Services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Services Title',
    },
    {
      name: 'services',
      type: 'array',
      title: 'Services Swiper',
      of: [
        {
          name: 'serviceItem',
          type: 'object',
          title: 'Service Item',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Service Name',
            },
            {
              name: 'text',
              type: 'string',
              title: 'Service text',
            },
          ],
        },
      ],
    },
  ],
}
