'use client'

import { SanityDocument } from 'next-sanity'
import { useEffect, useState } from 'react'
import JobCard from './JobCard'

interface FilterComponentProps {
  tags: SanityDocument[]
  jobsListings: SanityDocument[]
}

export default function FilterComponent({
  tags,
  jobsListings,
}: FilterComponentProps) {
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [filteredJobs, setFilteredJobs] = useState<SanityDocument[]>([])

  useEffect(() => {
    setFilteredJobs(jobsListings)
  }, [jobsListings])

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag)
    if (tag === '') {
      setFilteredJobs(jobsListings)
    } else {
      setFilteredJobs(
        jobsListings.filter((jobListing) => jobListing.jobTags.includes(tag)),
      )
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col border border-accent rounded-md p-4 w-full gap-4">
        <h2 className="text-2xl font-bold">Filter Jobs</h2>
        <div className="flex gap-2">
          <label htmlFor="tags">Filter by Tags</label>
          <select
            className="border border-accent rounded-md p-2"
            onChange={(e) => handleTagChange(e.target.value)}
            value={selectedTag}
          >
            <option value="">All</option>
            {tags.map((tag) => (
              <option key={tag._id} value={tag.name}>
                {tag.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((jobListing) => (
          <JobCard key={jobListing._id} jobListing={jobListing} />
        ))}
      </div>
    </div>
  )
}
