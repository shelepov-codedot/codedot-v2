import { createClient } from '@sanity/client'
import clientData from '../../sanityClient'

const sanityFetch = async (query) => {
  const client = createClient(clientData)
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
