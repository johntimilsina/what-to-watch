import Image from "next/image"
import Logo from '@/app/img/AppIcon.png'

export function AppIcon({ className }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <Image
                src={Logo}
                alt="What to Watch"
                fill
                className="object-contain"
            />
        </div>
    )
}

