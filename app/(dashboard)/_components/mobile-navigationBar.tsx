import { SideBarRoutes } from "./sidebar-routes";



export default function MobileNavigationBar() {
    return (
        <div className="fixed bottom-0 h-16 w-full flex z-20">
            <div className="flex justify-center w-full bg-white border-t-2  rounded-t-lg">
                <SideBarRoutes />

            </div>
        </div>
    )
}