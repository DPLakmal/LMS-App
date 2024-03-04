import { Package, PackageOpen } from "lucide-react";


export default function MenuList() {
    const menuList = [
        {
            id: 1,
            name: 'semester -  1'
        },
        {
            id: 2,
            name: 'semester - 2'
        },
        {
            id: 2,
            name: 'semester - 3'
        },
        {
            id: 2,
            name: 'semester -  4'
        },

    ];
    return (
        <>
            <div className="text-3xl mb-4">HNDIT</div>
            <div className="space-y-2">
                {menuList.map((item, index) => (

                    <div className="p-3 rounded-2xl bg-white hover:bg-gray-200">
                        <div className="flex flex-row gap-x-3">
                            <div className="hover:hidden">
                            <PackageOpen className="hidden" />
                            <Package className="" />
                            </div>
                    
                            {item.name}
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}






