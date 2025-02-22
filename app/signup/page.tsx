import Link from "next/link"
import { AppIcon } from "@/components/Common/AppIcon"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function SignUpPage() {
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
                    <form className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username" className="text-white">
                                Username
                            </Label>
                            <Input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                required
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

