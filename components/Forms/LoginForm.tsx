"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const validatePassword = (password: string) => {
        const minLength = 8
        const hasUpperCase = /[A-Z]/.test(password)
        const hasLowerCase = /[a-z]/.test(password)
        const hasNumber = /\d/.test(password)
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

        if (password.length < minLength) {
            return "Password must be at least 8 characters long"
        }
        if (!hasUpperCase || !hasLowerCase) {
            return "Password must contain both uppercase and lowercase letters"
        }
        if (!hasNumber) {
            return "Password must contain at least one number"
        }
        if (!hasSpecialChar) {
            return "Password must contain at least one special character"
        }
        return ""
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const passwordError = validatePassword(password)
        if (passwordError) {
            setError(passwordError)
        } else {
            setError("")
            // Handle login logic here
            console.log("Login submitted:", { username, password })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    className="bg-slate-50 dark:bg-slate-800"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-slate-50 dark:bg-slate-800"
                />
            </div>
            {error && (
                <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
            <Button type="submit" className="w-full">
                Sign In
            </Button>
        </form>
    )
}

