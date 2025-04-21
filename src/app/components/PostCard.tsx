import Link from 'next/link'
import { SanityDocument } from 'next-sanity'
import { urlFor } from '@/sanity/sanityImage'
import Image from 'next/image'

export default function PostCard({ post }: { post: SanityDocument }) {
  const postImageUrl = post.image ? urlFor(post.image)?.url() : null
  return (
    <Link
      href={`/posts/${post.slug.current}`}
      className="block bg-[var(--background)] border border-[var(--accent)] rounded-xl p-6 transition-all hover:border-[var(--accent-light)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
    >
      {postImageUrl && (
        <Image
          src={postImageUrl}
          alt={post.title}
          width={1000}
          height={1000}
          className="w-full h-48 object-cover rounded-t-xl mb-6"
        />
      )}
      <h2 className="text-[var(--foreground)] text-xl font-bold tracking-tight mb-2">
        {post.title}
      </h2>
      <div className="flex items-center gap-2 text-sm text-[var(--foreground-muted)]">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span>
          {new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </span>
      </div>
    </Link>
  )
}
