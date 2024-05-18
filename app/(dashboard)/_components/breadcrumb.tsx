import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"



const Breadcrum = ({ data }: any) => {
    return (<div className="inline-flex bg-slate-100 w-full p-2 rounded-xl">


        <Breadcrumb >
            <BreadcrumbList >
                {data.map((ref: any, index: any) => (

                    <div key={index} className=" flex flex-row justify-center items-center">

                        <BreadcrumbItem className="hover:bg-blue-300 px-3 py-1 rounded-lg " >
                            <BreadcrumbLink href={`${ref.href}`}>{ref.title}</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator className={(data.length - 1) == index ? ("hidden") : ("flex")}>
                            <Slash />
                        </BreadcrumbSeparator>

                    </div>
                ))}

            </BreadcrumbList>
        </Breadcrumb>




    </div>
    );
}

export default Breadcrum;