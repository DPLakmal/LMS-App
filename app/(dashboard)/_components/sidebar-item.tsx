'use client'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface SideBarItemProps {
    icon: LucideIcon
    label: string
    href: string
}

export const SideBarItem = ({ icon: Icon, label, href }: SideBarItemProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const isActive =
        pathname === '/' || //root page
        pathname === href ||
        pathname?.startsWith(`${href}/`) //parent page

    const onClick = () => {
        router.push(href)
    }

    return (
        <button
            onClick={onClick}
            type="button"
            className={cn(
                'flex text-sm items-center w-full p-4 md:pl-6 transition-all hover:bg-slate-300/20 hover:text-slate-800 ',
                isActive &&
                'text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700'
            )}
        >
            <div className="flex items-center gap-x-2 py-2 flex-col md:flex-row">
                <Icon
                    size={22}
                    className={cn('text-slate-500', isActive && 'text-sky-900')}
                />
                <div className=" ">

                    {label}
                </div>
            </div>
            <div
                className={cn(
                    'ml-auto opacity-0 border-2 border-sky-700 h-full transition-all',
                    isActive && 'opacity-100'
                )}
            ></div>
        </button>
    )
}
