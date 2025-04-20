// components/header.tsx
import Link from "next/link"
import { Logo } from "./logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="flex items-center gap-6">
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary">
            How It Works
          </Link>
          <div className="hidden sm:flex gap-2">
            <Link 
              href="/login" 
              className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}