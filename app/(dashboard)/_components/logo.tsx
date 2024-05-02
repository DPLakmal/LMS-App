import Image from "next/image"


export const Logo = () => {
    return (
        <div className="flex flex-row gap-5 hover:bg-slate-100 p-2 rounded-lg">
            <Image
                height={30}
                width={30}
                src={"https://upload.wikimedia.org/wikipedia/commons/4/40/SLIATE_LOGO2.png"}
                alt={"logo"}
            />
            <div className="">
                <p className="font-semibold text-base text-sky-700">E - Learning Management System</p>
                <p className="text-xs text-muted-foreground">ATI - Galle</p>
            </div>
        </div>
    )
}