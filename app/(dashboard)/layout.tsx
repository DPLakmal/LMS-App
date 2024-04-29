import { Logo } from './_components/logo'
import MobileNavigationBar from './_components/mobile-navigationBar'
import { SideBar } from './_components/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full ">
            <div className="flex-1">
                <div className="p-4 gap-x-4 h-full flex items-center bg-yellow-300 border-b z-[49] pl-6 ">
                    <Logo /> E - Learning Management System
                    <p>kdf</p>
                </div>

                <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 -z-[48]">
                    <SideBar />
                </div>
            </div>
            <div className="md:pl-56 mx-4 flex items-center justify-center">{children}</div>
            <div className="flex md:hidden">
                <MobileNavigationBar />
            </div>
        </div>
    )
}

export default DashboardLayout
