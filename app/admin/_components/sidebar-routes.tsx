'use client'

import { Folder, Layout, NotebookIcon } from 'lucide-react'
import { SideBarItem } from './sidebar-item'

export const SideBarRoutes = () => {
    const guestRoutes = [
        {
            icon: Layout,
            lable: 'Dashboard',
            href: '/admin/dashboard',
        },
        {
            icon: Folder,
            lable: 'Past Papers',
            href: '/admin/pastpapers',
        },
        {
            icon: NotebookIcon,
            lable: 'Students',
            href: '/admin/students',
        },
        {
            icon: NotebookIcon,
            lable: 'Course',
            href: '/admin/courses',
        },


    ]

    const routes = guestRoutes
    return (
        <div className="flex md:flex-col w-full flex-row justify-between">
            {routes.map((route) => (
                <div className=" border-2 rounded-xl justify-center flex items-center m-0.5 md:m-3" key={route.href}>
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
