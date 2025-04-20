// components/footer.tsx
import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto py-8 px-4 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <Logo />
            <p className="text-sm text-gray-500">
              Building consistent learning habits for K-8 students through gamification.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Parent Guide
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Teacher Resources
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-500 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} GOAT Challenge. All rights reserved.
        </div>
      </div>
    </footer>
  )
}