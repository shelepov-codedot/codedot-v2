export default {
  name: 'Benefits',
  type: 'document',
  title: 'Benefits',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'benefitsItems',
      type: 'array',
      title: 'Benefits Items',
      of: [
        {
          name: 'benefitsItem',
          type: 'object',
          title: 'benefitsItem',
          fields: [
            {name: 'itemName', type: 'string', title: 'Name Item'},
            {name: 'itemText', type: 'text', title: 'Text Item'},
          ],
        },
      ],
    },
  ],
}
