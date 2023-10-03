import clientData from '../../sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import { createClient } from '@sanity/client'

const imageUrl = (source) => {
  return imageUrlBuilder(createClient(clientData)).image(source)
}

export default imageUrl
