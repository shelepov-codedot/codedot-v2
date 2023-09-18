export default {
  name: 'OurServices',
  type: 'document',
  title: 'OurServices',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'sectionTitle',
    },
    {
      name: 'servicesItems',
      type: 'array',
      title: 'Services Items',
      of: [
        {
          name: 'serviceItem',
          type: 'object',
          title: 'Service Item',
          fields: [
            {name: 'serviceName', type: 'string', title: 'Service Name'},
            {name: 'serviceText', type: 'text', title: 'Service Text'},
            {
              name: 'serviceLink',
              type: 'string',
              title: 'Item Link',
            },
          ],
        },
      ],
    },
  ],
}
