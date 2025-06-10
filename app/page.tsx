// app/page.tsx
import Link from "next/link"
import HeroIllustration from "@/components/hero-illustration"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero section */}
      <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Build Learning Habits with GOAT Challenge
                </h1>
                <p className="max-w-[600px] text-white/90 md:text-xl">
                  A fun, gamified way for K-8 students to develop consistent practice habits using educational apps.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link 
                  href="/login" 
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100"
                >
                  Get Started
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* How it works section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                GOAT Challenge makes learning fun and consistent through gamification.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Practice Daily</h3>
                <p className="text-gray-500">
                  Use educational apps like Khan Academy, Code.org, and ChessKid for at least 30 minutes a day.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Protect Your GOATs</h3>
                <p className="text-gray-500">
                  Practice 5+ days per week to help your GOATs cross the bridge and avoid the troll.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-white p-6 shadow-sm card-hover">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Earn Rewards</h3>
                <p className="text-gray-500">
                  Build your herd on the hill and earn badges, refunds, or credits for future challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="w-full py-12 md:py-24 lg:py-32 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Start Your GOAT Challenge?
              </h2>
              <p className="mx-auto max-w-[700px] text-white/90 md:text-xl">
                Join thousands of students building better learning habits and growing their GOAT herds.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link 
                href="/login" 
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}