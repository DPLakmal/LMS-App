import Image from "next/image"
import MenuList from "./menuList"



export default function SideBar() {
    return (
        <div className="flex flex-col w-64 border-r min-h-screen p-4  ">
            <div className="flex flex-row border p-3 rounded-xl">
                <Image src='https://th.bing.com/th/id/OIP.rgrzPO0f_JGpzVlHUMBJQQHaJ0?w=530&h=703&rs=1&pid=ImgDetMain' alt={"faas"} width={50} height={50}
                    className="" />
                <div className="text-3xl p-5 bg-sky-400  ">LMS</div>
            </div>
            <div className="border-b-2 mt-3"></div>
            <div className="grow my-5">
                <MenuList />
            </div>

            <div className="">Setting</div>
        </div>
    )
}