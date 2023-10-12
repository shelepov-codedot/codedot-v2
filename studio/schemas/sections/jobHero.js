export default {
  name: 'JobHero',
  type: 'document',
  title: 'JobHero',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'jobHeroTitle',
      type: 'string',
      title: 'JobHero Title',
    },
    {
      name: 'jobExperience',
      type: 'string',
      title: 'Job Experience',
    },
    {
      name: 'jobSalary',
      type: 'string',
      title: 'Job Salary',
    },
    {
      name: 'jobConditions',
      type: 'string',
      title: 'Job Conditions',
    },
    {
      name: 'jobBtn',
      type: 'string',
      title: 'Job Button Text',
    },
    {
      name: 'jobTextObject',
      type: 'object',
      title: 'Job TextObject',
      fields: [
        {name: 'jobTextName', type: 'string', title: 'Text Name'},
        {name: 'jobText', type: 'string', title: 'Text'},
      ],
    },
  ],
}
