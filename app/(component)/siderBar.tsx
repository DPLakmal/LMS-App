import Image from "next/image"



export default function SiderBar() {
    const menuList = [
        {
            id: 1,
            name: 'sem  1'
        },
        {
            id: 2,
            name: 'sem  2'
        },

    ];

    return (
        <div className="h-full w-64 md:flex flex-col fixed inset-y-0 z-50 ">
        <div className="flex flex-col bg-white overflow-auto border-r shadow-md">
            <Image src='/next.svg' alt={"faas"} width={130} height={130}
                className="border-b p-3" />
            <div className="">

                {menuList.map((item, index) => (
                    <div className="p-3 hover:bg-gray-200">
                        {item.name}
                    </div>
                ))
                }
            </div>

            </div>
        </div>
    )
}