
import Logo from "../../(component)/logo";
import { FormEvent } from "react";
import Link from "next/link";



export default function Login() {


    return (<div className="w-full h-screen flex justify-center items-center">

        <div className="flex flex-col w-full h-screen  justify-center items-center">
            <div className="text-xl mb-7">
                Sri Lanka Institute of Advanced Technological Education (SLIATE)
                <div className=" text-center">
                    E - Learning Management System
                </div>
            </div>


            <div className="flex  gap-x-12  border-2 w-min py-5 px-8 rounded-xl shadow-md">
                <Logo />
                <div className="flex flex-col  items-center justify-center  ">
                    <div className="flex  flex-col justify-center p-6 lg:px-4 border-4 rounded-xl">
                        <div className="text-3xl">Login</div>

                        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                            {/* form */}
                            <form className="space-y-2" action="#" method="POST" >

                                <div className="bg-white p-4 rounded-lg">
                                    <div className="relative bg-inherit">
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            className="peer bg-transparent h-10 w-64 rounded-lg  placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                            placeholder="Enter Email Address"
                                        />
                                        <label
                                            htmlFor="username"
                                            className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                        >
                                            Email address
                                        </label>
                                    </div>
                                </div>

                                <div className="bg-white p-4 rounded-lg">
                                    <div className="relative bg-inherit">
                                        <input
                                            type="password"
                                            id="username"
                                            name="username"
                                            className="peer bg-transparent h-10 w-64 rounded-lg text-gray-200 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                                            placeholder="Enter Password"
                                        />
                                        <label
                                            htmlFor="username"
                                            className="absolute cursor-text left-0 -top-3 text-sm text-gray-500 bg-inherit mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                                        >
                                            Password
                                        </label>
                                    </div>
                                </div>


                                <div className="flex justify-between items-center flex-row px-4 mb-5">
                                    <Link href='/'>
                                        <button
                                            type="submit"
                                            className="text-lg flex w-fit justify-center rounded-md bg-indigo-600 px-4 py-1.5  font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                    </Link>
                                    <div className="text-sm justify-end flex ">
                                        <a
                                            href="#"
                                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flow-col-2 gap-1 pt-3 text-sm justify-end">
                                    <div className=" ">
                                        Already have an not account?
                                    </div>
                                    <Link href={`/register`} className="text-blue-500">Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}