import { Metadata } from "next"
import Link from "next/link"
import { LoginForm } from "@/components/login/login-form"

export const metadata: Metadata = {
  title: "Login | Proplanex - Textile ERP Solutions",
  description: "Sign in to your Proplanex account to access your textile manufacturing dashboard.",
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Proplanex</span>
            </Link>
          </div>

          <LoginForm />

          {/* Back Link */}
          <div className="mt-8 text-center">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
