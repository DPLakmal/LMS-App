import Logo from "@/app/_components/logo";
import Register from "./page";


export default function Login() {

    return (<div className=" h-screen flex justify-center items-center">

        <div className="flex flex-col w-full h-screen  justify-center items-center">
            <div className="text-xl mb-7">
                Sri Lanka Institute of Advanced Technological Education (SLIATE)
                <div className=" text-center">
                    E - Learning Management System
                </div>

            </div>


            <div className="flex justify-center w-fit py-5 px-8  gap-x-12  border-2  rounded-xl shadow-md">
                <Logo />
                <Register />
            </div>
        </div>
    </div>
    );
}