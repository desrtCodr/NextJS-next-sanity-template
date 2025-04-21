import { PortableText, SanityDocument } from 'next-sanity'

export default function JobCard({
  jobListing,
}: {
  jobListing: SanityDocument
}) {
  const { title, description, location, salary, jobTags } = jobListing

  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount)
  }

  return (
    <div className="bg-[var(--background)] border border-[var(--accent)] rounded-xl p-6 transition-all hover:border-[var(--accent-light)] hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] flex flex-col justify-between p">
      <div className="space-y-3">
        <h2 className="text-[var(--foreground)] text-xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="text-[var(--foreground-muted)] text-sm leading-relaxed">
          <PortableText value={description} />
        </div>
        <div className="flex items-center justify-between text-sm text-[var(--foreground-muted)]">
          <div className="flex flex-col items-center gap-1">
            {location.filter(Boolean).map((loc: string) => (
              <div key={loc} className="flex items-center gap-1">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>{loc}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
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
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{formatMoney(salary)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {Array.isArray(jobTags) &&
          jobTags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs rounded-full bg-[var(--accent-light)] text-[var(--foreground)] opacity-80"
            >
              {tag}
            </span>
          ))}
      </div>
    </div>
  )
}
