import { client } from '@/sanity/client'
import JobCard from '../components/JobCard'
import { SanityDocument } from 'next-sanity'

const JOBS_QUERY = `*[_type == "jobListing"]`

export default async function JobsPage() {
  const jobsListings = await client.fetch<SanityDocument[]>(JOBS_QUERY)
  return (
    <main className="min-h-screen max-w-7xl p-4">
      <h1 className="text-4xl font-bold mb-8">Jobs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobsListings.map((jobListing) => (
          <div key={jobListing._id}>
            <JobCard jobListing={jobListing} />
          </div>
        ))}
      </div>
    </main>
  )
}
