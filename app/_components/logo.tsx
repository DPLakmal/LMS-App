import Image from "next/image"


export default function Logo() {
    return (

        <div className="flex flex-row p-4">

            <Image src="https://upload.wikimedia.org/wikipedia/commons/4/40/SLIATE_LOGO2.png" alt=" fdf"
                width={100} height={100} className="rounded-l-2xl p-1 border-2 border-blue-500" />

            <div className="text-5xl text-white p-3  bg-blue-600 text-center rounded-r-2xl ">
                <div className="text-sm text-white p-1 bg-blue-400 text-center  rounded-2xl my-3">HNDIT - Galle</div>

                <div className="m-1">

                    LMS
                </div>

            </div>
        </div>
    )
}