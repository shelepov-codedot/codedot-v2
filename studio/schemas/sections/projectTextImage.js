export default {
  name: 'ProjectTextImage',
  type: 'document',
  title: 'ProjectTextImage',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'projectTitle',
      type: 'string',
      title: 'Project Title',
    },
    {
      name: 'projectText',
      type: 'text',
      title: 'Project Text',
    },
    {
      name: 'projectImage',
      type: 'image',
      title: 'Project Image',
    },
  ],
}
