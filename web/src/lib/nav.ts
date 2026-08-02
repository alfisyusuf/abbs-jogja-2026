export function resolveNavHref(item: any): string {
  if (!item) return '#'
  switch (item.linkType) {
    case 'internal':
      if (!item.internalHref) return '#'
      return item.internalType === 'post' ? `/berita/${item.internalHref}` : `/${item.internalHref}`
    case 'anchor':
      return `/#${(item.anchor || '').replace(/^#/, '')}`
    case 'external':
    default:
      return item.externalUrl || '#'
  }
}
