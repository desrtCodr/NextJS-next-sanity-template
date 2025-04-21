import { client } from '@/sanity/client'
import { SanityDocument } from 'next-sanity'
import FilterComponent from '../components/FilterComponent'

const JOBS_QUERY = `*[_type == "jobListing"]{
  ...,
  "jobTags": jobTags[]->{
    name,   
  }
}`
const TAGS_QUERY = `*[_type == "tag"]`
export default async function JobsPage() {
  const jobsListings = await client.fetch<SanityDocument[]>(JOBS_QUERY)
  const simplifiedJobsListings = jobsListings.map((jobListing) => ({
    ...jobListing,
    jobTags: jobListing.jobTags.map((jobTag: SanityDocument) => jobTag.name),
  }))
  console.log(simplifiedJobsListings)
  const tags = await client.fetch<SanityDocument[]>(TAGS_QUERY)
  return (
    <main className="min-h-screen flex flex-col gap-4 max-w-7xl p-4">
      <h1 className="text-4xl font-bold">Jobs</h1>
      <FilterComponent tags={tags} jobsListings={simplifiedJobsListings} />
    </main>
  )
}
