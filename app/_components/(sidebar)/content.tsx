
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "600", style: "normal", preload: false, });


async function getData() {
    const res = await fetch('http://localhost:3001/api/sem1', { cache: 'force-cache' })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


export default async function Content() {
    const data = await getData()

    return (
        <div className="  my-3">
            <div className="min-w-60 grid  grid-col md:grid-cols-2 lg:grid-cols-3 gap-5 mx-1 ">
                {data.map((item: any) => (
                    <Link href={`${item.code}`} key={item.code}>
                        <div className=" size-80 bg-red-500 rounded-2xl shadow-md">
                            <img src={item.coverImg} alt="" className="p-2 rounded-3xl" />
                            <div className={` text-center text-white ${poppins.className}`}>
                                {item.title}
                            </div>
                            <div className="flex flex-row justify-between mx-10 my-1">
                                <div className="text-white">
                                    {item.code}
                                </div>
                                <div className="">GPA</div>
                                <div className="">
                                    <div className=" ">credit
                                    </div>
                                    <div className="relative">
                                        <div className="h-1 w-16 bg-white absolute"></div>
                                        <div className={`h-1 w-${4 * item.credit} bg-green-600 absolute z-10`}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="ml-10">Lecturer: Anusha H. A. P.</div>
                        </div>
                    </Link>
                ))}
            </div></div>
    )
}