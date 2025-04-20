// app/login/page.tsx
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md rounded-lg border bg-white p-8 shadow-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p className="text-sm text-gray-500">
            Sign in to track your practice and grow your GOAT herd
          </p>
        </div>
        
        <div className="mt-6 space-y-4">
          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
              <path d="M1 1h22v22H1z" fill="none" />
            </svg>
            Sign in with Google
          </button>
          
          <button className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
            <svg className="h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43z"
                fill="#000000"
              />
              <path
                d="M22 16.479v.9c0 .59-.034 1.17-.1 1.73-.133 1.2-.638 2.33-1.313 3.1-.708.81-1.893 1.41-3.234 1.41-1.172 0-2.013-.59-3.034-1.2-1.021-.6-2.084-1.19-3.69-1.19-1.57 0-2.292.59-3.028 1.2-.737.61-1.589 1.2-2.956 1.2-1.717 0-2.991-.81-3.699-1.98-.71-1.17-1.102-2.73-1.102-4.6 0-2.06.574-4.27 1.548-5.9.975-1.63 2.596-2.87 4.851-2.87 1.278 0 2.155.59 3.032 1.2.877.61 1.754 1.19 3.097 1.19 1.233 0 2.058-.59 2.884-1.19.826-.6 1.653-1.2 3.119-1.2 1.224 0 2.226.3 3.097.98.818.64 1.453 1.54 1.879 2.52-1.665.94-2.78 2.72-2.78 4.57 0 1.96 1.186 3.73 3.279 4.43z"
                fill="#000000"
              />
            </svg>
            Sign in with Apple
          </button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          
          <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary-dark focus:outline-none">
            Sign In with Email
          </button>
        </div>
        
        <div className="mt-6 text-center text-sm">
          <p className="text-gray-500">
            Don't have an account?{" "}
            <Link href="#" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
          <p className="mt-2 text-gray-500">
            Need help?{" "}
            <Link href="#" className="text-primary hover:underline">
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}