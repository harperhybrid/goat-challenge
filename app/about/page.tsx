// app/about/page.tsx
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-6 text-center">About GOAT Challenge</h1>

        <div className="space-y-8">
          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600">
              GOAT Challenge is a gamified web application designed to support K–8 students, their parents, and teachers
              in building consistent practice habits using leading external learning apps such as Khan Academy,
              Code.org, and ChessKid.
            </p>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-600 mb-4">
              Students earn GOATs by practicing educational apps consistently (5+ days per week). Each week, GOATs
              attempt to cross the bridge and climb the hill. If students miss practice days, the troll under the bridge
              takes some GOATs!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-primary/10">
                <div className="text-4xl mb-2">🏆</div>
                <h3 className="font-medium">Earn GOATs</h3>
                <p className="text-sm text-gray-600">Practice 30+ minutes daily</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-secondary/10">
                <div className="text-4xl mb-2">🌉</div>
                <h3 className="font-medium">Cross the Bridge</h3>
                <p className="text-sm text-gray-600">Practice 5+ days weekly</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-lg bg-accent/10">
                <div className="text-4xl mb-2">⛰️</div>
                <h3 className="font-medium">Climb the Hill</h3>
                <p className="text-sm text-gray-600">Build your GOAT herd</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Tiers</h2>
            <div className="grid md:grid-cols-3 gap-6 mt-4">
              <div className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium">Lil' GOAT</h3>
                <p className="text-2xl font-bold mt-2">$50</p>
                <p className="mt-2 text-gray-600">5 GOATs per week</p>
                <p className="mt-1 text-gray-600">Up to $50 refund</p>
              </div>

              <div className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium">Grinder GOAT</h3>
                <p className="text-2xl font-bold mt-2">$100</p>
                <p className="mt-2 text-gray-600">10 GOATs per week</p>
                <p className="mt-1 text-gray-600">Up to $100 refund</p>
              </div>

              <div className="border rounded-lg p-6 shadow-sm bg-white hover:shadow-md transition-shadow">
                <h3 className="text-xl font-medium">Boss GOAT</h3>
                <p className="text-2xl font-bold mt-2">$250</p>
                <p className="mt-2 text-gray-600">25 GOATs per week</p>
                <p className="mt-1 text-gray-600">Up to $250 refund</p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-gray-600 mb-6">
              GOAT Challenge was created by a team of educators, parents, and technologists who are passionate about
              helping children develop strong learning habits through gamification and positive reinforcement.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <Link 
              href="/" 
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary-dark"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}