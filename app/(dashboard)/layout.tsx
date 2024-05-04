
import { Logo } from './_components/logo'
import MobileNavigationBar from './_components/mobile-navigationBar'
import { NavBar } from './_components/navbar'
import { SideBar } from './_components/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-screen h-screen ">
            <div className="flex-1">
                <NavBar />
                <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 Z-20">
                    <SideBar />
                </div>
                <div className="md:pl-56 mx-4 flex items-center justify-center md:mt-0 pt-20">{children}</div>
            </div>
            <div className="flex md:hidden">
                <MobileNavigationBar />
            </div>
        </div>
    )
}

export default DashboardLayout
