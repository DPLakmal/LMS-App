import { SideBarRoutes } from './sidebar-routes'

export const SideBar = () => {
    return (
        <div className="h-full border-r flex flex-col 
        overflow-y-auto bg-white shadow-sm mt-20">
            <div className="flex flex-col w-full flex-1 justify-between">
                <SideBarRoutes />
                <div className="p-4 w-full bg-white border-t flex items-center ">
                    <div className="text-xs text-muted-foreground py-2 px-4 lg:flex-1">© 2024 LMS</div>
                    <button className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-muted-foreground text-xs" type="button" id="radix-:R2tf8ta:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                        {/* ... icon  */}
                    </button>
                </div>
            </div>

        </div >
    )
}