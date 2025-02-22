"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { AppIcon } from "@/components/Common/AppIcon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Search, PlusCircle } from "lucide-react"

const genres = ["Action", "Comedy", "Drama", "Sci-Fi", "Horror", "Romance", "Thriller", "Fantasy"]
const moods = ["Happy", "Sad", "Excited", "Relaxed", "Tense", "Thoughtful"]

export default function RecommendPage() {
    const [prompt, setPrompt] = useState("")
    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const [selectedMoods, setSelectedMoods] = useState<string[]>([])
    const [recommendations, setRecommendations] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState(false)

    const handleGenreToggle = (genre: string) => {
        setSelectedGenres((prev) => (prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]))
    }

    const handleMoodToggle = (mood: string) => {
        setSelectedMoods((prev) => (prev.includes(mood) ? prev.filter((m) => m !== mood) : [...prev, mood]))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // Simulate API call
        setTimeout(() => {
            setRecommendations(["The Shawshank Redemption", "Inception", "The Matrix", "Forrest Gump", "The Dark Knight"])
            setIsLoading(false)
        }, 2000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-blue-900">
            <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-32 h-8 relative">
                            <AppIcon className="w-full h-full" />
                        </div>
                    </Link>
                    <nav>
                        <Link href="/">
                            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                                Log In
                            </Button>
                        </Link>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto space-y-8">
                    <div className="text-center space-y-4">
                        <h1 className="text-4xl font-bold text-white">AI Movie Recommendations</h1>
                        <p className="text-lg text-blue-200">Tell us what you're in the mood for</p>
                    </div>

                    <Card className="bg-black/30 border-white/10 backdrop-blur-xl shadow-2xl">
                        <form onSubmit={handleSubmit} className="p-6 space-y-8">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg blur" />
                                <div className="relative">
                                    <div className="flex gap-4 mb-6">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="text-white hover:bg-white/10 flex gap-2 items-center"
                                        >
                                            <PlusCircle className="w-4 h-4" />
                                            Attach
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="text-white hover:bg-white/10 flex gap-2 items-center"
                                        >
                                            <Search className="w-4 h-4" />
                                            Search
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="text-white hover:bg-white/10 flex gap-2 items-center"
                                        >
                                            <Sparkles className="w-4 h-4" />
                                            Reason
                                        </Button>
                                    </div>
                                    <Input
                                        placeholder="Describe what you're looking for... (e.g., A mind-bending sci-fi thriller with plot twists)"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        className="bg-white/5 border-white/10 text-white placeholder:text-white/50 text-lg p-6 rounded-lg focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-medium text-white mb-3">Select Genres</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {genres.map((genre) => (
                                            <Badge
                                                key={genre}
                                                variant={selectedGenres.includes(genre) ? "default" : "outline"}
                                                className={`cursor-pointer text-sm py-2 px-4 hover:bg-purple-500/20 transition-colors
                          ${selectedGenres.includes(genre)
                                                        ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                                                        : "border-white/20 text-white hover:border-white/40"
                                                    }`}
                                                onClick={() => handleGenreToggle(genre)}
                                            >
                                                {genre}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-white mb-3">Select Mood</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {moods.map((mood) => (
                                            <Badge
                                                key={mood}
                                                variant={selectedMoods.includes(mood) ? "default" : "outline"}
                                                className={`cursor-pointer text-sm py-2 px-4 hover:bg-purple-500/20 transition-colors
                          ${selectedMoods.includes(mood)
                                                        ? "bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                                                        : "border-white/20 text-white hover:border-white/40"
                                                    }`}
                                                onClick={() => handleMoodToggle(mood)}
                                            >
                                                {mood}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-6 text-lg font-medium rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        Generating Recommendations...
                                    </div>
                                ) : (
                                    "Get AI Recommendations"
                                )}
                            </Button>
                        </form>
                    </Card>

                    {recommendations.length > 0 && (
                        <Card className="bg-black/30 border-white/10 backdrop-blur-xl p-6">
                            <h2 className="text-2xl font-bold text-white mb-4">Your Recommendations</h2>
                            <div className="grid gap-4">
                                {recommendations.map((movie, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/5 p-4 rounded-lg border border-white/10 hover:bg-white/10 transition-colors cursor-pointer"
                                    >
                                        <h3 className="text-lg text-white">{movie}</h3>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )}
                </div>
            </main>
        </div>
    )
}

