import sanityFetch from '$lib/server/sanityFetch'

export async function load({ params, url }) {
  const { slug } = params

  const query = `*[slug.current=="/${slug}"]`
  const response = await sanityFetch(query)

  let pageData = response[0]

  let dataExport = []

  for (let i = 0; i < pageData?.content.length; i++) {
    if (pageData.content[i]) {
      await sanityFetch(`*[_id=='${pageData.content[i]._ref}']`).then((data) => {
        dataExport.push(data[0])
      })
    }
  }

  pageData = {
    ...pageData,
    content: [...dataExport],
  }

  return pageData
}
