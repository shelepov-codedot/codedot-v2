export default {
  name: 'Roadmap',
  type: 'document',
  title: 'Roadmap',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'roadmapItems',
      type: 'array',
      title: 'Roadmap Items',
      of: [
        {
          name: 'roadmapItem',
          type: 'object',
          title: 'Roadmap item',
          fields: [
            {name: 'roadmapName', type: 'string', title: 'Roadmap Name'},
            {name: 'roadmapText', type: 'text', title: 'Roadmap Text'},
          ],
        },
      ],
    },
  ],
}
