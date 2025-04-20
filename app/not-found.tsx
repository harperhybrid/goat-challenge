// app/not-found.tsx
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center p-8">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-gray-500">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <h2 className="mt-6 text-3xl font-bold">404 - Page Not Found</h2>
      <p className="mt-2 text-center text-gray-600 max-w-md">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div className="mt-6 flex gap-4">
        <Link 
          href="/about" 
          className="inline-flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-8 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          About Us
        </Link>
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