import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "600", style: "normal", preload: false, });


export default function Content() {

    const subjects = [
        {
            "id": "3012",
            "title": "Object Oriented Programming (Pl)",
            "coverImg": "https://placehold.co/600x400",
            "credit": 4
        },
        {
            "id": "3022",
            "title": "Web Programming",
            "coverImg": "https://placehold.co/600x400",
            "credit": 4
        },
        {
            "id": "3032",
            "title": "Data Structures and Algorithms",
            "coverImg": "https://placehold.co/600x400",
            "credit": 2
        },
        {
            "id": "3042",
            "title": "Database Management Systems",
            "coverImg": "https://placehold.co/600x400",
            "credit": 3
        },
        {
            "id": "3052",
            "title": "Operating Systems",
            "coverImg": "https://placehold.co/600x400",
            "credit": 2
        },
        {
            "id": "3062",
            "title": "Information and Computer Security",
            "coverImg": "https://placehold.co/600x400",
            "credit": 2
        },
        {
            "id": "3072",
            "title": "Statistics for IT",
            "coverImg": "https://placehold.co/600x400",
            "credit": 3
        }
    ]
    
    return (
        <div className="min-w-60 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10">
            {subjects.map((item) => (

                <Link href={`${item.id}`}>

                    <div className=" size-80 bg-red-500 rounded-2xl">
                        <img src={item.coverImg} alt="" className="p-2 rounded-3xl" />
                        <div className={` text-center text-white ${poppins.className}`}>
                            {item.title}
                        </div>
                        <div className="flex flex-row justify-between mx-10 my-1">
                            <div className="text-white">
                                {item.id}
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
        </div>
    )
}