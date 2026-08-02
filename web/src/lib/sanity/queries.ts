import {sanityClient} from './client'

const navItemFields = `
  label, linkType, anchor, externalUrl,
  "internalHref": internalPage->slug.current,
  "internalType": internalPage->_type,
  children[]{ label, linkType, anchor, externalUrl, "internalHref": internalPage->slug.current, "internalType": internalPage->_type }
`

export async function getSiteSettings() {
  return sanityClient.fetch(`*[_type == "siteSettings"][0]{
    siteTitle, siteTagline, logo, favicon, footerText, copyrightText,
    mainMenu[]{ ${navItemFields} },
    navCtaLabel, navCtaUrl,
    phone, whatsappNumber, email, address, socialLinks,
    whatsappFloatMessage, ppsActive, ppsBadgeText,
    seoDescription, seoKeywords
  }`)
}

export async function getHomePage() {
  return sanityClient.fetch(`*[_type == "homePage"][0]`)
}

export async function getGuruKaryawanPage() {
  return sanityClient.fetch(`*[_type == "guruKaryawanPage"][0]`)
}

export async function getStaffMembers() {
  return sanityClient.fetch(`*[_type == "staffMember"] | order(order asc){
    name, group, position, photo, bio, email
  }`)
}

export async function getLatestPosts(limit = 3) {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc)[0...$limit]{
      title, "slug": slug.current, mainImage, excerpt, publishedAt,
      "category": category->title
    }`,
    {limit}
  )
}

export async function getAllPostsPaged(start: number, end: number) {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc)[$start...$end]{
      title, "slug": slug.current, mainImage, excerpt, publishedAt,
      "category": category->title
    }`,
    {start, end}
  )
}

export async function getAllPostSlugs() {
  return sanityClient.fetch(`*[_type == "post"]{"slug": slug.current}`)
}

export async function getPostCount() {
  return sanityClient.fetch(`count(*[_type == "post"])`)
}

export async function getPostBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title, mainImage, excerpt, publishedAt, body, tags, seo,
      "category": category->{title, "slug": slug.current},
      "author": author->{name, image, bio},
      "prev": *[_type == "post" && publishedAt < ^.publishedAt] | order(publishedAt desc)[0]{title, "slug": slug.current},
      "next": *[_type == "post" && publishedAt > ^.publishedAt] | order(publishedAt asc)[0]{title, "slug": slug.current}
    }`,
    {slug}
  )
}

export async function getRelatedPosts(categoryTitle: string, excludeSlug: string, limit = 2) {
  return sanityClient.fetch(
    `*[_type == "post" && category->title == $categoryTitle && slug.current != $excludeSlug] | order(publishedAt desc)[0...$limit]{
      title, "slug": slug.current, mainImage, publishedAt
    }`,
    {categoryTitle, excludeSlug, limit}
  )
}

export async function getAllCategories() {
  return sanityClient.fetch(`*[_type == "category"] | order(title asc){title, "slug": slug.current}`)
}

export async function getAllPageSlugs() {
  return sanityClient.fetch(`*[_type == "page"]{"slug": slug.current}`)
}

export async function getPageBySlug(slug: string) {
  return sanityClient.fetch(`*[_type == "page" && slug.current == $slug][0]`, {slug})
}
