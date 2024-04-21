"use client"

import { Key } from "lucide-react";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { LuPackage, LuPackageOpen } from "react-icons/lu";

const poppins = Poppins({ weight: "600", style: "normal", preload: false, });



export default function MenuList() {
    // const [isActive, setIsActive] = useState(false);
    const [isActiveItem, setIsActiveItem] = useState(0);
    const menuList = [
        {
            id: 1,
            name: 'semester -  1',
            year: '1'
        },
        {
            id: 2,
            name: 'semester - 2',
            year: '1'
        },
        {
            id: 2,
            name: 'semester - 3',
            year: '2'
        },
        {
            id: 2,
            name: 'semester -  4',
            year: '2'
        },

    ];
    return (
        <>
            <div className={`text-3xl mb-4 ${poppins.className}`}>HNDIT</div>
            <div className="space-y-2">
                {menuList.map((item, index) => (

                    <div key={index} onClick={() => { setIsActiveItem(index) }} className={`p-3 rounded-2xl ${isActiveItem == index ? 'bg-red-500' : 'bg-white'} hover:bg-gray-200`}>
                        <div className="bg-gray-100 w-fit px-2 rounded-md">Year {item.year}</div>
                        <div className="flex flex-row gap-x-3">
                            <div className="flex items-center">
                                {
                                    isActiveItem == index ? <LuPackageOpen /> : <LuPackage />
                                }
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




