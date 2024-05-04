"use client"
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { Check } from "lucide-react";
import React from "react";


const StudentDashboard = () => {

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
                            <Card className="w-fit">
                                <CardHeader>
                                    <CardTitle>Notifications</CardTitle>
                                    <CardDescription>You have 3 unread messages.</CardDescription>
                                </CardHeader>
                                <CardContent className="grid gap-4">

                                    <div>
                                        {notifications.map((notification, index) => (
                                            <div
                                                key={index}
                                                className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                                            >
                                                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                                                <div className="space-y-1">
                                                    <p className="text-sm font-medium leading-none">
                                                        {notification.title}
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        {notification.description}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">
                                        <Check className="mr-2 h-4 w-4" /> Mark all as read
                                    </Button>
                                </CardFooter>
                            </Card>
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

export default StudentDashboard;