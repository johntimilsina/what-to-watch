import { AppIcon } from "@/components/Common/AppIcon"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ProfilePage() {
    return (
        <div className="min-h-screen bg-background">
            <header className="bg-primary text-primary-foreground shadow-md">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <Link href="/home" className="flex items-center space-x-2">
                        <AppIcon className="w-8 h-8" />
                        <span className="text-xl font-bold">What to Watch</span>
                    </Link>
                    <nav>
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/home" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile" className="hover:underline">
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Button variant="secondary" size="sm">
                                    Log Out
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold">User Profile</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Username</h3>
                                <p>johndoe</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Email</h3>
                                <p>johndoe@example.com</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Favorite Genres</h3>
                                <ul className="list-disc list-inside">
                                    <li>Action</li>
                                    <li>Sci-Fi</li>
                                    <li>Drama</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold">Watch History</h3>
                                <p>You've watched 42 movies</p>
                            </div>
                            <Button>Edit Profile</Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}

