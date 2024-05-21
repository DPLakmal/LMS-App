import { Button } from "@/components/ui/button";
import Link from "next/link";

const DenidedPage = () => {
    return (

        <div className="flex items-center justify-center h-screen text-center">
            <div className="bg-red-300 p-6 rounded-xl " >
                <div className="text-3xl m-3">Access Denided</div>
                <div className="">Your are not allow to access this page </div>

                <Link href={'/'}>
                    <Button className="mt-6" >Go to Back</Button>

                </Link>
            </div>

        </div>
    );
}

export default DenidedPage;