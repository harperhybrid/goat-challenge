// components/logo.tsx
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
        <span className="text-xl">🐐</span>
        <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
          G
        </span>
      </div>
      <span className="text-xl font-bold tracking-tight">GOAT Challenge</span>
    </Link>
  )
}