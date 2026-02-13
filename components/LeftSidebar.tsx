"use client"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import { SiderbarProps } from "@/Types/Sidebar"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Sidebar = ({user} : SiderbarProps) => {
    const pathname = usePathname();
  return (
    <section className=" sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white 
    max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px];">
        <nav className="flex flex-col gap-4">
            <Link href="/"
            className="mb-12 cursor-pointer items-center flex gap-2">
                <Image
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="horizon Logo"
                    className="size-6 max-xl:size-14"
                />
                <h1 className="2xl:text-[26px] text-[26px] font-bold text-black-1 max-xl:hidden">Horizon</h1>                
            </Link>
            {
               
                sidebarLinks.map(({label, route, imgURL}) => {
                     const isActive = pathname === route || pathname.startsWith(`${route}/`)
                    return (
                        <Link href={route} key={label} className={cn('sidebar-link', {'bg-black-1' : isActive})}>
                            <div className="relative size-6">
                                <Image
                                    src={imgURL}
                                    alt={label}
                                    fill
                                    className={cn({'brightness-[3] invert-0' : isActive})}
                                />
                            </div>
                            <p className={cn("sidebar-label", {
                                "text-white!" :isActive
                            })}>
                                {label}
                            </p>
                        </Link>
                    )})}
                    <p className="text-red-500">User</p>
        </nav>
       <p className="text-red-500">Footer</p>
    </section> 
  )
}

export default Sidebar