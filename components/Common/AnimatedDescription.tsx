"use client"

import { TypeAnimation } from "react-type-animation"

export default function AnimatedDescription() {
    return (
        <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 dark:text-slate-200">
            <TypeAnimation
                sequence={[
                    "Discover new movies",
                    2000,
                    "Get personalized recommendations",
                    2000,
                    "Share your favorites with friends",
                    2000,
                    "Never run out of things to watch",
                    2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
            />
        </div>
    )
}

