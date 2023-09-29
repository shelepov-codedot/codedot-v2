export default {
  name: 'Review',
  type: 'document',
  title: 'Review',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Review Title',
    },
    {
      name: 'reviewItems',
      type: 'array',
      title: 'Review Swiper',
      of: [
        {
          name: 'reviewItem',
          type: 'object',
          title: 'Review Item',
          fields: [
            {
              name: 'reviewText',
              type: 'text',
              title: 'Review Text',
            },
            {
              name: 'reviewAuthor',
              type: 'string',
              title: 'Review Author',
            },
            {
              name: 'reviewJob',
              type: 'string',
              title: 'Review Job',
            },
            {
              name: 'reviewImg',
              type: 'image',
              title: 'Review Image',
            },
          ],
        },
      ],
    },
  ],
}
