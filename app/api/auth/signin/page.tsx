// 'use client'
import { getServerSession } from "next-auth";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { authOptions } from "../[...nextauth]/options";
import Logo from "@/app/_components/logo";
import { signIn } from "next-auth/react";
import SignInComponent from "./SignInComponent";



export default async function SignInPage() {


    // const session = await getServerSession(authOptions);
    // const userrole = session?.user.role
    // console.log(session?.callbackUrl);


    // If the user is already logged in, redirect to the homepage.
    // if (userrole == 'admin' || userrole == 'stud') {
    //     redirect('/admin/dashboard');
    // }
    // if (userrole == 'student') {
    //     redirect('/dashboard');
    // } if (userrole == 'lecturer') {
    //     redirect('/lecturer/dashboard');
    // }

    // const pathName = usePathname()
    // const searchParams = useSearchParams()
    // console.log(searchParams);




    // if (pathName.endsWith('/dashboard')) {
    //     redirect('/dashboard');
    // }
    // if (pathName.endsWith('/admin/dashboard')) {
    //     redirect('/admin/dashboard');
    // }
    // if (pathName.endsWith('/lecturer/dashboard')) {
    //     redirect('/lecturer/dashboard');
    // }


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
                            <SignInComponent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
