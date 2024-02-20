export default {
  name: 'Jobs',
  type: 'document',
  title: 'Jobs',
  i18n: {
    fieldNames: {
      lang: 'i18n_lang',
      baseReference: 'i18n_base',
      references: 'i18n_refs',
    },
  },

  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'i18n_lang',
      type: 'string',
      hidden: true,
    },

    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'jobsTitle',
      type: 'string',
      title: 'Jobs Title',
    },
    {
      name: 'jobsItems',
      type: 'array',
      title: 'Jobs Items',
      of: [
        {
          name: 'jobsItem',
          type: 'object',
          title: 'Jobs Item',
          fields: [
            {name: 'jobName', type: 'string', title: 'Job Name'},
            {name: 'jobExp', type: 'string', title: 'Job Experience'},
            {name: 'jobRequirements', type: 'string', title: 'Job Requirements'},
            {
              name: 'jobLink',
              title: 'Link',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
