// "use client"

// import { Button } from "@/components/ui/button";
// import { Mail } from "lucide-react";
// import { signIn } from "next-auth/react";


// export default function SignIn() {
//     return (
//         <>
//             {/* <Button onClick={() => signIn('google')}>
//                 <Mail className="mr-2 h-4 w-4" />  Sign in with Google
//             </Button> */}

//         </>
//     )
// }

'use client'

import Link from "next/link";
import Logo from "@/app/_components/logo";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";

const handleClick = () => {
    signIn('google')
}


export default function Login() {


    return (<div className="w-full h-screen flex justify-center items-center">

        <div className="flex flex-col w-full h-screen  justify-center items-center">
            <div className="text-xl mb-7">
                Sri Lanka Institute of Advanced Technological Education (SLIATE)
                <div className=" text-center">
                    E - Learning Management System
                </div>
            </div>


            <div className=" w-fit flex justify-between  gap-x-12  border-2  py-5 px-8 rounded-xl shadow-md">
                <Logo />
                <div className="flex flex-col justify-between items-center   ">
                    <div className="flex  flex-col justify-center p-6 lg:px-4 border-4 rounded-xl">
                        <div className="text-3xl">Login - LMS</div>

                        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                            <Button onClick={handleClick}>
                                <Mail className="mr-2 h-4 w-4" />  Sign in with Google
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}