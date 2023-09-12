export default {
  name: 'Counters',
  type: 'document',
  title: 'Counters',
  fields: [
    {
      name: 'countersItems',
      type: 'array',
      title: 'CountersItems',
      of: [
        {
          title: 'Item',
          name: 'Item',
          type: 'object',
          fields: [
            {name: 'number', type: 'string', title: 'Item number'},
            {name: 'text', type: 'string', title: 'Item text'},
          ],
        },
      ],
    },
  ],
}
