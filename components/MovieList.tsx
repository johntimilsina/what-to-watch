import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const sampleMovies = [
    { id: 1, title: "Inception", year: 2010, imageUrl: "/placeholder.svg?height=400&width=300" },
    { id: 2, title: "The Shawshank Redemption", year: 1994, imageUrl: "/placeholder.svg?height=400&width=300" },
    { id: 3, title: "The Dark Knight", year: 2008, imageUrl: "/placeholder.svg?height=400&width=300" },
    { id: 4, title: "Pulp Fiction", year: 1994, imageUrl: "/placeholder.svg?height=400&width=300" },
]

export default function MovieList() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sampleMovies.map((movie) => (
                <Card
                    key={movie.id}
                    className="bg-black/30 border-white/10 backdrop-blur-xl hover:bg-black/40 transition-colors"
                >
                    <CardHeader className="p-0">
                        <Image
                            src={movie.imageUrl || "/placeholder.svg"}
                            alt={movie.title}
                            width={300}
                            height={400}
                            className="rounded-t-lg"
                        />
                    </CardHeader>
                    <CardContent className="p-4">
                        <CardTitle className="text-white">{movie.title}</CardTitle>
                        <CardDescription className="text-blue-200">{movie.year}</CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

