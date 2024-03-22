import Form from "../(component)/form";
import Logo from "../(component)/logo";


export default function Login() {

    return (<div className="w-full flex justify-center ">
        <div className="flex flex-col-2 gap-x-24 items-center justify-center  border-2 w-min m-40 p-10 rounded-xl shadow-md">
        <Logo/>
        <Form />        
        </div>
    </div>
    );
}