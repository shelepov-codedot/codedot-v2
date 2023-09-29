import { createClient } from '@sanity/client'

export async function _getProps() {
  const client = createClient({
    projectId: 'c6ki8epl',
    dataset: 'production',
    useCdn: true,
  })

  const query = `*[slug.current=="/"]`
  const section = await client.fetch(query)

  let pageData = section[0]

  let dataExport = []

  for (let i = 0; i < pageData.content.length; i++) {
    await client.fetch(`*[_id=='${pageData.content[i]._ref}']`).then((data) => {
      dataExport.push(data[0])
    })
  }

  pageData = {
    ...pageData,
    content: [...dataExport],
  }

  return pageData
}
