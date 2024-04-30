import { Logo } from "./logo"
import { SideBarRoutes } from './sidebar-routes'

export const SideBar = () => {
    return (
        <div className="h-full border-r flex flex-col 
        overflow-y-auto bg-white shadow-sm">
            <div className="p-6">
                {/* <Logo /> */}
            </div>
            <div className="flex flex-col w-full">
                <SideBarRoutes />

                <div className="">
                    <footer className="p-4 w-full bg-white border-t flex items-center justify-between">
                        <div className="text-xs text-muted-foreground py-2 px-4 lg:flex-1">© 2024 ENRA d.o.o.</div>
                        <button className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-muted-foreground text-xs" type="button" id="radix-:R2tf8ta:" aria-haspopup="menu" aria-expanded="false" data-state="closed"></button>
                    </footer>

                </div>
            </div>
        </div>
    )
}