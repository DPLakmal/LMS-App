import Image from "next/image"


export default function Logo() {
    return (
        <div className="w-64 ">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/4/40/SLIATE_LOGO2.png" alt=" fdf"
                width={500} height={100} />
            <div className="text-7xl text-white p-3 bg-blue-600 text-center rounded-b-2xl">
                <div className="text-3xl text-white p-2 bg-blue-400 text-center  rounded-2xl ">Galle - IT</div>

<div className="m-1">

                LMS
</div>
                
                </div>
        </div>
    )
}