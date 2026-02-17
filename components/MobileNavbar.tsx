"use client"
import { MobileNavProps } from '@/Types/Sidebar'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Footer from './Footer'


const MobileNavbar = ({ user }  : MobileNavProps ) => {

    
const pathname = usePathname();

  return (
    <section className='w-full max-w-66'>
        <Sheet>
            <SheetTrigger>
                <Image 
                    src="/icons/hamburger.svg"
                    width={30}
                    height={30}
                    alt="menu"
                    className="cursor-pointer"
                />
            </SheetTrigger>
                <SheetContent side='left'>

            <Link href="/"
            className="cursor-pointer items-center flex gap-1 px-4">
                <Image
                    src="/icons/logo.svg"
                    width={34}
                    height={34}
                    alt="horizon Logo"
                />
                <h1 className="text-[26px] font-ibm-plex-serif font-bold text-black-1">Horizon</h1>                
            </Link>
            <div className='mobilenav-sheet'>
                <SheetClose asChild>
                    <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                         {
               
                sidebarLinks.map(({label, route, imgURL}) => {
                     const isActive = pathname === route || pathname.startsWith(`${route}/`)
                    return (
                        <SheetClose asChild key={route}>
                            <Link href={route} key={label} className={cn('mobilenav-sheet_close w-full ml-5', {'bg-black-1' : isActive})}>
                                <Image
                                    src={imgURL}
                                    alt={label}
                                    width={20}
                                    height={20}
                                    className={cn({'brightness-[3] invert-0' : isActive})}
                                />
                            <p className={cn("text-[16px] font-semibold text-black-2", {
                                "text-white!" :isActive
                            })}>
                                {label}
                            </p>
                            </Link>
                        </SheetClose>

                    )})}
                    </nav>
                </SheetClose>
                <Footer user={user} type='mobile'/>
            </div>
            </SheetContent>
        </Sheet>
    </section>
  )
}

export default MobileNavbar