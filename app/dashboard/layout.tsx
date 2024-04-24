import SideBar from '../(component)/(sidebar)/sideBar'
import MobileNavigationBar from '../(component)/mobile-navigationBar'


export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}

) {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
                <SideBar />
            </div>
            <div className="flex">
                {children}
                <MobileNavigationBar />
            </div>
        </div>
    )
}