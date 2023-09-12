export default {
  name: 'Hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'Text',
      type: 'string',
      title: 'Text',
    },
    {
      title: 'TagList',
      name: 'taglist',
      type: 'array',
      of: [{type: 'string', name: 'tagname'}],
    },
    {
      title: 'Image',
      name: 'Image',
      type: 'image',
    },
  ],
}
