


export default function MobileNavigationBar() {
    return (
        <div className="fixed bottom-0 h-16 w-full flex z-1s0">
            <div className="flex justify-center flex-row  gap-x-6 w-full px-10 bg-white border-t-2  rounded-t-lg">

                <div className="container p-4 m-3 bg-slate-600 rounded-3xl flex items-center justify-center">passpaper</div>
                <div className="container p-4 m-3 bg-slate-600 rounded-3xl flex items-center justify-center">course</div>
                <div className="container p-4 m-3 bg-slate-600 rounded-3xl flex items-center justify-center">chat</div>

            </div>
        </div>
    )
}