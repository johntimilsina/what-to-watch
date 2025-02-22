import Link from "next/link"
import { AppIcon } from "@/components/Common/AppIcon"
import { Button } from "@/components/ui/button"
import MovieList from "@/components/MovieList"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900 to-blue-900">
            <header className="bg-black/20 backdrop-blur-lg border-b border-white/10">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/home" className="flex items-center space-x-2">
                        <div className="w-32 h-8 relative">
                            <AppIcon className="w-full h-full" />
                        </div>
                    </Link>
                    <nav>
                        <ul className="flex space-x-4 items-center">
                            <li>
                                <Link href="/home" className="text-white hover:text-purple-300">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" className="text-white hover:text-purple-300">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Button variant="secondary" size="sm" className="bg-white/5 hover:bg-white/10 text-white border-0">
                                    Log Out
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-white">Recommended Movies</h1>
                <MovieList />
            </main>
        </div>
    )
}

