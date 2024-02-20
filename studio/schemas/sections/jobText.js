export default {
  name: 'JobText',
  type: 'document',
  title: 'JobText',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'jobTextItems',
      type: 'array',
      title: 'JobText Items',
      of: [
        {
          name: 'jobTextItem',
          type: 'object',
          title: 'JobText Item',
          fields: [
            {
              name: 'itemName',
              type: 'string',
              title: 'Item Name',
            },
            {
              title: 'RichTextBlock',
              name: 'richTextBlock',
              type: 'array',
              of: [{type: 'block'}],
            },
          ],
        },
      ],
    },
  ],
}
