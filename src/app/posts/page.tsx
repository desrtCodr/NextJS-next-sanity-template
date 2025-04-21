import { type SanityDocument } from 'next-sanity'
import { client } from '@/sanity/client'
import PostCard from '../components/PostCard'

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)
`
const options = { next: { revalidate: 0 } }

export default async function IndexPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options)

  return (
    <main className="min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <h1 className="text-4xl font-bold mb-8">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li key={post._id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  )
}
