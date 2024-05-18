import { authOptions } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

import { NavBar } from "../(dashboard)/_components/navbar"
import { SideBar } from "./_components/sidebar"
import { Toaster } from "@/components/ui/toaster"



const AdminDashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession(authOptions)

    if (!session) {
        redirect("/api/auth/signin?/callbackUrl?=/dashboard")
    }

    return (
        <div className="w-screen h-screen ">
            <div className="flex-1">
                <NavBar />
                <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 Z-20">
                    <SideBar />
                </div>
                <div className="md:pl-56 mx-4 flex items-center justify-center md:mt-0 pt-20">
                    <div className="p-5">

                        {children}
                    </div>
                </div>
                <Toaster />
            </div>

            <div className="flex md:hidden">

                {/* <MobileNavigationBar /> */}
            </div>
        </div>
    )
}

export default AdminDashboardLayout
