import { type SanityDocument } from 'next-sanity'
import { MENU_ITEMS_QUERY } from './components/Header'

import { client } from '@/sanity/client'
import ItemCard from './components/ItemCard'

const options = { next: { revalidate: 0 } }

export default async function IndexPage() {
  const menuItems = await client.fetch<SanityDocument[]>(
    MENU_ITEMS_QUERY,
    {},
    options,
  )

  return (
    <main className="min-h-screen max-w-7xl p-4">
      <h1 className="text-4xl font-mono font-bold mb-8">Datasets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((menuItem) => (
          <ItemCard key={menuItem._id} menuItem={menuItem} />
        ))}
      </div>
    </main>
  )
}
