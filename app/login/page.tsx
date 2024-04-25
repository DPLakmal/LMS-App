import Form from "../(component)/form";
import Logo from "../(component)/logo";


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
                <Form />
            </div>
        </div>
    </div>
    );
}