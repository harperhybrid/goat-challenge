import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { GoogleSignInButton } from "@/components/auth/google-sign-in-button"

export default function LoginPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Welcome to GOAT Challenge</CardTitle>
          <CardDescription className="text-center">
            Sign in with Google to track your practice and grow your GOAT herd
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <GoogleSignInButton />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <div className="text-sm text-center text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link href="#" className="text-primary hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </div>
          <div className="text-sm text-center text-muted-foreground">
            Need help?{" "}
            <Link href="#" className="text-primary hover:underline">
              Contact support
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}