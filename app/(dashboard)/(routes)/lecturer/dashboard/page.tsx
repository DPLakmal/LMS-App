"use client"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Check } from "lucide-react";
import React from "react";

import { LecturerAnnouncement } from "@/app/admin/_components/announcement-traget/announcement-Lecturer";
const LecturerDashboard = () => {

    const [date, setDate] = React.useState<Date | undefined>(new Date())


    const notifications = [
        {
            title: "Your call has been confirmed.",
            description: "1 hour ago",
        },
        {
            title: "You have a new message!",
            description: "1 hour ago",
        },
        {
            title: "Your subscription is expiring soon!",
            description: "2 hours ago",
        },
    ]
    return (
        <div className="w-full h-screen">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel className="m-4 ">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem><Card className="h-[300px]">
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{ }</span>
                                </CardContent>
                            </Card></CarouselItem>
                            <CarouselItem>...</CarouselItem>
                            <CarouselItem>...</CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={30} className=" m-4">

                    <ResizablePanelGroup direction="vertical">
                        <ResizablePanel>
                            <LecturerAnnouncement />
                        </ResizablePanel >
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={50} className=" m-4">
                            <Calendar
                                mode="single"
                                selected={date}
                                // onSelect={setDate}
                                className="rounded-md border"
                            />
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </ResizablePanel>
            </ResizablePanelGroup>

        </div>
    );
}

export default LecturerDashboard;