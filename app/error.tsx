// app/error.tsx
"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center p-8">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-red-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </div>
      <h2 className="mt-6 text-2xl font-bold">Something went wrong!</h2>
      <p className="mt-2 text-center text-gray-600 max-w-md">
        We apologize for the inconvenience. Our team has been notified of this issue.
      </p>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => reset()}
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Try again
        </button>
        <Link 
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow hover:bg-primary-dark"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}