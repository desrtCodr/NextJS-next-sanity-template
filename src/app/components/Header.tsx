import { groq } from 'next-sanity'
import HeaderClient from './HeaderClient'
import { client } from '@/sanity/client'

export const MENU_ITEMS_QUERY = groq`*[_type == "menuItem"]`

export default async function Header() {
  const options = { next: { revalidate: 0 } }
  const menuList = await client.fetch(MENU_ITEMS_QUERY, {}, options)
  return <HeaderClient menuList={menuList} />
}
