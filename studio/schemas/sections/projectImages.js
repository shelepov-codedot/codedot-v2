export default {
  name: 'ProjectImages',
  type: 'document',
  title: 'ProjectImages',
  fields: [
    {
      name: 'sectiontitle',
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
          {title: 'TitleLeft', value: 'titleLeft'},
          {title: 'TitleRight', value: 'titleRight'},
        ],
        layout: 'radio',
      },
    },
  ],
}
