import Image from "next/image"


export default function Logo() {
    return (

        <div className=" size-48 ">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/4/40/SLIATE_LOGO2.png" alt=" fdf"
                width={500} height={100} />
            <div className="text-6xl text-white p-3 bg-blue-600 text-center rounded-b-2xl">
                <div className="text-sm text-white p-1 bg-blue-400 text-center  rounded-2xl ">HNDIT - Galle</div>

                <div className="m-1">

                    LMS
                </div>

            </div>
        </div>
    )
}