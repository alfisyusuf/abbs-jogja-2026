import {urlFor} from './image'

/**
 * Serializer ringan Portable Text -> HTML. Cukup untuk kebutuhan blockContent
 * kita (heading, paragraf, list, quote, bold/italic/underline, link, gambar).
 * Hasilnya dirender lewat `<Fragment set:html={toHtml(body)} />` di halaman.
 */
function escapeHtml(text: string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function renderSpan(child: any, markDefs: any[]) {
  let text = escapeHtml(child.text || '')
  for (const mark of child.marks || []) {
    const def = markDefs.find((d: any) => d._key === mark)
    if (def?._type === 'link') {
      const target = def.blank ? ' target="_blank" rel="noopener"' : ''
      text = `<a href="${def.href}"${target}>${text}</a>`
    } else if (mark === 'strong') {
      text = `<strong>${text}</strong>`
    } else if (mark === 'em') {
      text = `<em>${text}</em>`
    } else if (mark === 'underline') {
      text = `<span class="underline">${text}</span>`
    }
  }
  return text
}

export function toHtml(blocks: any[] = []): string {
  let html = ''
  let listType: 'bullet' | 'number' | null = null

  const closeList = () => {
    if (listType) {
      html += listType === 'bullet' ? '</ul>' : '</ol>'
      listType = null
    }
  }

  for (const block of blocks || []) {
    if (block._type === 'image') {
      closeList()
      const src = urlFor(block).width(1200).url()
      const alt = escapeHtml(block.alt || '')
      html += `<figure><img src="${src}" alt="${alt}" loading="lazy" />${
        block.caption ? `<figcaption>${escapeHtml(block.caption)}</figcaption>` : ''
      }</figure>`
      continue
    }

    if (block._type !== 'block') continue

    const inner = (block.children || []).map((c: any) => renderSpan(c, block.markDefs || [])).join('')

    if (block.listItem) {
      if (listType !== block.listItem) {
        closeList()
        html += block.listItem === 'bullet' ? '<ul>' : '<ol>'
        listType = block.listItem
      }
      html += `<li>${inner}</li>`
      continue
    }

    closeList()

    switch (block.style) {
      case 'h2':
        html += `<h2>${inner}</h2>`
        break
      case 'h3':
        html += `<h3>${inner}</h3>`
        break
      case 'h4':
        html += `<h4>${inner}</h4>`
        break
      case 'blockquote':
        html += `<blockquote>${inner}</blockquote>`
        break
      default:
        html += `<p>${inner}</p>`
    }
  }
  closeList()
  return html
}
