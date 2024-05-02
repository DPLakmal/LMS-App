import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from 'next/image'
import { Separator } from "@/components/ui/separator";

export default async function Home() {

  return <main className="flex flex-col items-center justify-center h-screen">
    {/* logo */}
    <div className="m-1 ">
      <div className="flex flex-row gap-5 hover:bg-slate-100 p-2 rounded-lg  ">
        <Image
          height={60}
          width={60}
          src={"https://upload.wikimedia.org/wikipedia/commons/4/40/SLIATE_LOGO2.png"}
          alt={"logo"}
        />
        <div className="">
          <p className="font-semibold text-3xl text-sky-700">E - Learning Management System</p>
          <p className="text-xl text-muted-foreground">ATI - Galle</p>
        </div>
      </div>
    </div>

    <Separator className="w-[400px] mb-12" />
    <div className="flex md:flex-row flex-col gap-10">
      <div className="">
        <Card className="w-[300px] text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Students</CardTitle>
            <CardDescription>For login access to LMS - student</CardDescription>
          </CardHeader>
          {/* <CardContent>
            <p>Card Content</p>
          </CardContent> */}
          <CardFooter className="flex justify-center">
            <Link href={"/dashboard"}>
              <Button >
                Go to Students Dashboard
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="">
        <Card className="w-[300px] text-center">
          <CardHeader>
            <CardTitle className="text-3xl">Lecturers</CardTitle>
            <CardDescription>For login access to LMS - Lecturers</CardDescription>
          </CardHeader>
          {/* <CardContent>
            <p>Card Content</p>
          </CardContent> */}
          <CardFooter className="flex justify-center">
            <Link href={"/lecturer/dashboard"}>
              <Button >
                Go to Lecturers Dashboard
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>


    </div>
  </main >
}