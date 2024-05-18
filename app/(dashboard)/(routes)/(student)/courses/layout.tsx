
"use client"
import Breadcrum from "@/app/(dashboard)/_components/breadcrumb"
import { usePathname } from "next/navigation"


const CoursesPageLayout = ({ children }: { children: React.ReactNode }) => {
    const path = usePathname()
    // const path = "/courses/semester-1/1012";

    // Split the path into parts
    const parts = path.split('/');

    // Initialize an empty array to store the objects
    const resultArray: any = [];

    // Iterate through the parts to construct the array of objects
    parts.reduce((accumulator, currentPart, index) => {
        if (currentPart !== "") {
            const href = (index === 0 ? '/' : accumulator) + '/' + currentPart;
            const title = currentPart === "" ? "" : currentPart.replace(/-/g, ' '); // Replace '-' with ' ' except for empty string
            resultArray.push({ href, title });
            return href;
        } else {
            return accumulator; // Skip the empty part
        }
    }, '');


    return (
        <div className="">
            <div className="">
                <div className="flex items-start m-5 ">
                    <Breadcrum data={resultArray}>
                    </Breadcrum>
                </div>
                {children}
            </div>
        </div>
    );
}

export default CoursesPageLayout;