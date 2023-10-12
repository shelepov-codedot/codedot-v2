import { createClient } from '@sanity/client'

const sanityFetch = async (query) => {
  const client = createClient({
    projectId: 'c6ki8epl',
    dataset: 'production',
    useCdn: true,
  })

  const response = await client.fetch(query, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  return response
}

export default sanityFetch
