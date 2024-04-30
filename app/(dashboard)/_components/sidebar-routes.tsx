'use client'

import { Folder, Layout, NotebookIcon } from 'lucide-react'
import { SideBarItem } from './sidebar-item'

export const SideBarRoutes = () => {
    const guestRoutes = [
        {
            icon: Layout,
            lable: 'Dashboard',
            href: '/dashboard',
        },
        {
            icon: Folder,
            lable: 'Past Paper',
            href: '/student',
        },
        {
            icon: NotebookIcon,
            lable: 'Notice',
            href: '/lecturer/notice',
        },
        {
            icon: NotebookIcon,
            lable: 'Course',
            href: '/courses',
        },
    ]

    const routes = guestRoutes
    return (
        <div className="flex md:flex-col w-full flex-row justify-between">
            {routes.map((route) => (
                <div className=" border-2 rounded-xl justify-center flex items-center m-0.5 md:m-3">
                    <SideBarItem
                        key={route.href}
                        icon={route.icon}
                        label={route.lable}
                        href={route.href}
                    />
                </div>
            ))}
        </div>
    )
}
