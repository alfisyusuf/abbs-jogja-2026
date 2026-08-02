import imageUrlBuilder from '@sanity/image-url'
import {sanityClient} from './client'

const builder = imageUrlBuilder(sanityClient)

/** Pakai: urlFor(image).width(800).url() */
export function urlFor(source: any) {
  return builder.image(source)
}
