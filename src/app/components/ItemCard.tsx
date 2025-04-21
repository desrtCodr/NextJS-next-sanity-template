import { SanityDocument } from 'next-sanity'
import Link from 'next/link'

export default function ItemCard({ menuItem }: { menuItem: SanityDocument }) {
  return (
    <Link
      href={`/${menuItem.slug.current}`}
      className="bg-[var(--background)] border border-[var(--accent)] rounded-xl p-6 transition-all hover:border-[var(--accent-light)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
    >
      <h2 className="text-[var(--foreground)] text-xl font-bold tracking-tight">
        {menuItem.title}
      </h2>
      <p className="capitalize text-[var(--foreground)] text-sm">
        {menuItem.description}
      </p>
    </Link>
  )
}
