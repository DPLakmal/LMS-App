"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";




export const SignUpComponent = () => {


    let redirectUrl = "http://location:3000";

    useEffect(() => {
        const url = new URL(location.href);
        redirectUrl = url.searchParams.get("callbackUrl")!;
    });
    const handleClick = () => {
        signIn('google', {
            callbackUrl: redirectUrl,

        })
    };
    return (

        <>
            <div className="m-1 flex justify-between">
                <label htmlFor="" className="mr-3  w-fit inline-flex">Registration No</label>

                <Input placeholder="GAL-IT-20XX-X-XXX" />
            </div>

            <Button variant={"outline"} className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" size={"lg"} onClick={handleClick}>
                <Image height={24} width={24} className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                <span>Login with Google</span>
            </Button>




        </>
    );
}
