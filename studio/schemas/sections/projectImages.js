export default {
  name: 'ProjectImages',
  type: 'document',
  title: 'ProjectImages',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'projectText',
      type: 'text',
      title: 'Project Text',
    },
    {
      name: 'projectImagesItems',
      type: 'array',
      title: 'Project Images List',
      of: [{name: 'projectImage', type: 'image', title: 'image'}],
    },
    {
      title: 'Variation List',
      name: 'variation',
      type: 'string',
      options: {
        list: [
          {title: 'Title Left', value: 'titleLeft', type: 'string'},
          {title: 'Title Right', value: 'titleRight', type: 'string'},
          {title: 'Title Left with small images', value: 'titleLeftSmallImg', type: 'string'},
          {title: 'Title Right with small images', value: 'titleRightSmallImg', type: 'string'},
          {title: 'Text Left', value: 'textLeft', type: 'string'},
          {title: 'Text Right', value: 'textRight', type: 'string'},
        ],
        layout: 'radio',
      },
    },
  ],
}
