import { MENU_ITEMS, type MenuItem } from '@/data/menuData'

export const MENU_PLACEHOLDER_IMAGE = 'coming-soon.png'

export function getPrimaryMenuImage(images: string[]) {
  return images.length > 0 ? images[0] : MENU_PLACEHOLDER_IMAGE
}

export function isMenuImagePlaceholder(image: string) {
  return image === MENU_PLACEHOLDER_IMAGE
}

export function getMenuItemsByIds(ids: readonly string[]) {
  const itemsById = new Map(MENU_ITEMS.map((item) => [item.id, item]))

  return ids
    .map((id) => itemsById.get(id))
    .filter((item): item is MenuItem => Boolean(item))
}
