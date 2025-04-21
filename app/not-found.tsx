import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SearchXIcon } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center p-8">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <SearchXIcon className="h-10 w-10 text-muted-foreground" />
      </div>
      <h2 className="mt-6 text-3xl font-bold">404 - Page Not Found</h2>
      <p className="mt-2 text-center text-muted-foreground max-w-md">
        The page you are looking for does not exist or has been moved. Let us get you back on track.
      </p>
      <div className="mt-6 flex gap-4">
        <Button asChild variant="outline">
          <Link href="/about">About Us</Link>
        </Button>
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
