import { GalleryVerticalEnd } from "lucide-react"
import BannerImage from '@/assets/images/banner.jpg'
import Image from "next/image"
import { FaSchoolLock } from "react-icons/fa6";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <a href="#" className="flex items-center gap-2 font-bold text-lg">
                        <div className="bg-primary text-primary-foreground flex p-1.5 items-center justify-center rounded-md">
                            <FaSchoolLock className="size-[18px]" />
                        </div>
                        School Sync.
                    </a>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-xs">
                        {children}
                    </div>
                </div>
            </div>
            <div className="bg-muted relative hidden lg:block">
                <Image
                    src={BannerImage}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
