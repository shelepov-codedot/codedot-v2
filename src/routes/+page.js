import { createClient } from '@sanity/client'

export async function _getProps() {
  const client = createClient({
    projectId: 'c6ki8epl',
    dataset: 'production',
    useCdn: true,
  })

  const query = `*[_type=="Hero"]`
  const section = await client.fetch(query)

  console.log(section)

  return {
    body: {
      section,
    },
  }
}
_getProps()
