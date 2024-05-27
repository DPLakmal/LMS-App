
import Link from "next/link";
import SignInComponent from "../signin/SignInComponent";
import { SignUpComponent } from "./SignUpComponent";
import Logo from "@/app/_components/logo";



export default function Register() {
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
            <div className="text-3xl">Registeration new Student</div>

            <div className="mt-6 w-full  sm:mx-auto sm:w-full sm:max-w-sm">
              <SignUpComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}