// app/loading.tsx
export default function Loading() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        <div className="text-center">
          <p className="text-lg font-medium">Loading...</p>
          <p className="text-sm text-gray-500">Preparing your GOAT Challenge experience</p>
        </div>
      </div>
    </div>
  )
}