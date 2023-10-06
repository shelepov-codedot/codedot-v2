import sanityFetch from '$lib/server/sanityFetch'

export async function load({ params }) {
  const { slug } = params
  let dataExport = [],
    secondData = []

  const query = `*[slug.current=="/${slug}"]`
  const response = await sanityFetch(query)

  let pageData = response[0]

  for (let i = 0; i < pageData?.content.length; i++) {
    if (pageData.content[i]) {
      await sanityFetch(`*[_id=='${pageData.content[i]._ref}']`).then((data) => {
        dataExport.push(data[0])
      })
    }
  }

  if (slug == 'cases') {
    if (pageData) {
      let secondQuery = `*[_type == "Cases"] {
        casesList[_type=="casesItem"] {
          name, 
          category,
          image,
          _key,
          slug
        }
      }`

      let secondResponse = await sanityFetch(secondQuery)
      secondData = secondResponse.reduce((accumulator, current) => {
        accumulator.push(...current.casesList)
        return accumulator
      }, [])
    }
  }

  secondData.length > 0
    ? (pageData = { ...pageData, content: [...dataExport], secondData })
    : (pageData = { ...pageData, content: [...dataExport] })
  const casesPage = pageData?.content.find((item) => item._type === 'CasesPage')

  if (casesPage) {
    casesPage.secondData = secondData
  }

  pageData = { ...pageData, content: [...dataExport] }

  return pageData
}
