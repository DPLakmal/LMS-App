import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"



const Breadcrum = ({ data }: any) => {
    return (<div className="sdf">


        <Breadcrumb>
            <BreadcrumbList>
                {data.map((ref: any, index: any) => (
                    <><BreadcrumbItem>
                        <BreadcrumbLink href={`${ref.href}`}>{ref.Title}</BreadcrumbLink>
                    </BreadcrumbItem>

                        <BreadcrumbSeparator className={(data.length - 1) == index ? ("hidden") : ("flex")}>
                            <Slash />
                        </BreadcrumbSeparator>


                    </>
                ))}

            </BreadcrumbList>
        </Breadcrumb>




    </div>
    );
}

export default Breadcrum;