
import { Announcement } from "@/app/(dashboard)/_components/announcement";
import { LecturerAnnouncement } from "@/app/(dashboard)/_components/announcement-Lecturer";
import { CalendarDemo } from "@/app/(dashboard)/_components/calender";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import React, { Suspense, useState } from "react";
import Loading from "../../../loading";


const StudentDashboard = () => {
    // const [loading, setLoading] = useState(true);

    // if (loading) {
    //     return <div className="flex flex-col space-y-3">
    //         <Skeleton className="h-[125px] w-full rounded-xl" />
    //         <div className="space-y-2">
    //             <Skeleton className="h-4 w-[250px]" />
    //             <Skeleton className="h-4 w-[200px]" />
    //         </div>
    //     </div>;
    // }
    return (
        <div className="w-full h-screen">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel className="m-4 ">
                    <Separator></Separator>
                    <div className="m-3">
                        <Suspense fallback={<Loading />}>

                            <Announcement />
                        </Suspense>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={30} className=" m-2">
                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel>
                            <LecturerAnnouncement />
                        </ResizablePanel >
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={50} className=" m-4">
                            <div className="">
                                <div className="text-center mb-2 text-lg font-bold">Timeline of HNDIT</div>
                                <div className="">
                                    <CalendarDemo />
                                </div>
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>

        </div>
    );
}

export default StudentDashboard;