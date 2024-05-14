
"use client"
import Breadcrum from "@/app/(dashboard)/_components/breadcrumb"
import { usePathname } from "next/navigation"


const CoursesPageLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname()
    return (

        <div className="">
            <div className="">
                <div className="m-5">
                    <Breadcrum data={[
                        { href: `${pathname}`, Title: `${pathname.replaceAll(/\//g, '')}` },
                        {
                            href: "/",
                            Title: "semester 1"
                        }]
                    }>
                    </Breadcrum>

                </div>

                {children}

            </div>
        </div>
    );
}

export default CoursesPageLayout;