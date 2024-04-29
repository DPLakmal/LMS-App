"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";


const loginForm = () => {
    return (<>
        <form>
            <div className="text-xl text-center mb-6">Login Account</div>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Registration No</Label>
                    <Input id="name" placeholder="GAL-IT-2021-F-0001" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Password</Label>
                    <Input id="name" placeholder="*****" />
                </div>
                <Button size={'lg'}>
                    Login
                </Button>

            </div>
        </form>
    </>);
}

export default loginForm;