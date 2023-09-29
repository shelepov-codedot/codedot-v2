export default {
  name: 'Dignity',
  type: 'document',
  title: 'Dignity',
  fields: [
    {
      name: 'dignityItems',
      type: 'array',
      title: 'DignityItems',
      of: [
        {
          title: 'Item',
          name: 'Item',
          type: 'object',
          fields: [
            {name: 'Name', type: 'string', title: 'Item name'},
            {name: 'Text', type: 'string', title: 'Item text'},
          ],
        },
      ],
    },
  ],
}
