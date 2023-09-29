export default {
  preview: {
    select: {
      title: 'sectionTitle',
    },
  },

  name: 'Header',
  type: 'document',
  title: 'Header',
  fields: [
    {
      name: 'sectionTitle',
      type: 'string',
      title: 'Section Title',
    },
    {
      name: 'logoHeader',
      type: 'image',
      title: 'Logo Image',
    },
    {
      name: 'navItems',
      type: 'array',
      title: 'Nav Items',
      of: [
        {
          name: 'navItem',
          type: 'object',
          title: 'Nav Item',
          fields: [
            {
              name: 'navItemName',
              type: 'string',
              title: 'Nav Item Name',
            },
            {
              name: 'navItemLink',
              type: 'string',
              title: 'Nav Item Link',
            },
            {
              name: 'navSubItems',
              type: 'array',
              title: 'Nav Subitems List',
              of: [
                {
                  name: 'navSubItem',
                  type: 'object',
                  title: 'Nav Subitem',
                  fields: [
                    {name: 'navSubItemName', type: 'string', title: 'Nav Subitem Name'},
                    {name: 'navSubItemLink', type: 'string', title: 'Nav Subitem Link'},
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'shopifyItem',
      type: 'object',
      title: 'Shopify Item',
      fields: [
        {name: 'shopifyText', type: 'string', title: 'Shopify Text'},
        {name: 'shopifyLink', type: 'string', title: 'Shopify Link'},
        {name: 'shopifyIcon', type: 'image', title: 'Shopify Image'},
      ],
    },
    {
      name: 'button',
      type: 'object',
      title: 'Button',
      fields: [
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'buttonLink', type: 'string', title: 'Button Link'},
      ],
    },
  ],
}
