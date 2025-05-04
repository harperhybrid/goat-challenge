// components/hero-illustration.tsx
export function HeroIllustration() {
  return (
    <div className="relative h-64 w-full sm:h-80 md:h-96">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Hill */}
          <div className="absolute bottom-0 h-32 w-64 rounded-t-full bg-green-600"></div>

          {/* Bridge */}
          <div className="absolute bottom-10 left-16 h-4 w-32 bg-yellow-800"></div>

          {/* Troll */}
          <div className="absolute bottom-2 left-20 h-8 w-8 rounded-full bg-purple-700">
            <div className="absolute -top-2 left-1 h-3 w-3 rounded-full bg-purple-700"></div>
            <div className="absolute -top-2 right-1 h-3 w-3 rounded-full bg-purple-700"></div>
          </div>

          {/* GOATs */}
          <div className="animated-bounce absolute bottom-32 right-16 h-10 w-10 rounded-full bg-white">
            <div className="absolute -top-4 left-1 h-4 w-3 rounded-full bg-white"></div>
            <div className="absolute -top-4 right-1 h-4 w-3 rounded-full bg-white"></div>
            <div className="absolute left-2 top-3 h-1 w-1 rounded-full bg-black"></div>
            <div className="absolute right-2 top-3 h-1 w-1 rounded-full bg-black"></div>
          </div>

          <div
            className="animated-bounce absolute bottom-36 right-28 h-8 w-8 rounded-full bg-white"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute -top-3 left-1 h-3 w-2 rounded-full bg-white"></div>
            <div className="absolute -top-3 right-1 h-3 w-2 rounded-full bg-white"></div>
          </div>

          <div
            className="animated-bounce absolute bottom-30 right-8 h-6 w-6 rounded-full bg-white"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="absolute -top-2 left-0.5 h-2 w-1.5 rounded-full bg-white"></div>
            <div className="absolute -top-2 right-0.5 h-2 w-1.5 rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  )
}