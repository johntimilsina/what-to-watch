"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AppIcon } from "@/components/Common/AppIcon"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { signInWithGoogle, signUpWithEmail } from "@/lib/auth"

export default function SignUpPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    const handleGoogleSignUp = async () => {
        try {
            const user = await signInWithGoogle()
            if (user) {
                router.push("/recommend")
            }
        } catch (error) {
            setError("Failed to sign up with Google. Please try again.")
        }
    }

    const handleEmailSignUp = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            const user = await signUpWithEmail(email, password)
            if (user) {
                router.push("/home")
            }
        } catch (error) {
            setError("Failed to create account. Please try again.")
        }
    }

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-blue-900 p-4 flex items-center justify-center">
            <Card className="w-full max-w-md bg-black/30 border-white/10 backdrop-blur-xl">
                <CardHeader>
                    <div className="w-32 h-8 relative mx-auto mb-4">
                        <AppIcon className="w-full h-full" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center text-white">Create an Account</CardTitle>
                    <CardDescription className="text-center text-blue-200">
                        Sign up to start getting personalized movie recommendations
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleEmailSignUp} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-white">
                                Username
                            </Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                required
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white">
                                Email
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-white">
                                Password
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="Create a password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/50"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                        >
                            Sign Up
                        </Button>
                    </form>
                    <div className="mt-4">
                        <Button
                            onClick={handleGoogleSignUp}
                            variant="outline"
                            className="w-full border-white/10 hover:bg-white/10"
                        >
                            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Sign up with Google
                        </Button>
                    </div>
                    {error && (
                        <Alert variant="destructive" className="mt-4 bg-red-500/10 border-red-500/20 text-red-200">
                            <AlertDescription>{error}</AlertDescription>
                        </Alert>
                    )}
                    <div className="mt-6 text-center text-blue-200">
                        Already have an account?{" "}
                        <Link href="/" className="text-purple-400 hover:text-purple-300 underline">
                            Log in
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </main>
    )
}

