import Image from "next/image"
import MenuList from "./menuList"



export default function SiderBar() {
     return (
        <div className="flex flex-col w-64 border-r min-h-screen p-4 rounded-r-xl  bg-red-400">
            <div className="">
                <Image src='/next.svg' alt={"faas"} width={130} height={130}
                    className="border-b p-3" />
            </div>
            <div className="grow my-5">
                <MenuList/>
            </div>
         
            <div className="">Setting</div>
        </div>
    )
}