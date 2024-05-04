import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({ weight: "600", subsets: ["latin"] });

export default async function Semester({ semesterId }: { semesterId: number }) {
    async function getData() {
        const res = await fetch(`https://lms-app-backend-api.onrender.com/api/courses/semesters?semesterId=${semesterId}`, { cache: 'force-cache' })
        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }
        return res.json()
    }
    const data = await getData()

    return (
        <div className=" flex  my-3">
            <div className="min-w-60 grid  grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-1 ">
                {data.map((item: any) => (
                    <Link href={`/courses/${item.code}`} key={item.code} >
                        <div className=" w-80 h-72 bg-white border rounded-2xl shadow-sm hover:shadow-md">
                            <Image height={320} width={320} src={item.coverImg == "" ? "https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg" : ""} alt="" className="p-2 rounded-3xl" />
                            <div className={` text-center  ${poppins.className}`}>
                                {item.title}
                            </div>
                            <div className="flex flex-row justify-between mx-10 my-1">
                                <div className="">
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
                            <div className="ml-10">Lecturer: </div>
                        </div>
                    </Link>
                ))}
            </div></div>
    )
}