"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import DownloadButtonList from "./DownloadButtonList";
import { useState, useEffect } from 'react';



const PastpapersDialogbox = ({ title, code }: any) => {
    const [oldSyllabus, setOldSyllabus] = useState([]);
    const [newSyllabus, setNewSyllabus] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/api/pastpapers?code=${code}`); // Replace with your actual API endpoint
            const data = await response.json();

            setNewSyllabus(await data?.newSyallbus.map((item: any) => ({ title: item.year, link: item.herf })));
            setOldSyllabus(await data?.oldSyallbus.map((item: any) => ({ title: item.year, link: item.herf })));
        };

        fetchData();
    }, [code]);

    return (

        <div className="">
            <Dialog>
                <DialogTrigger className="m-2"><Button>open</Button></DialogTrigger>
                <DialogContent >
                    <DialogHeader className="h-full w-full m-4 ">
                        <DialogTitle className="text-center  text-xl mr-16" >HNDIT {code} - {title}</DialogTitle>
                        <div className="text-center pb-4"> - Past Papers -</div>
                        <DialogDescription>
                            <div className="flex flex-row h-full justify-center ">
                                <div className="">
                                    <div className="">Old Syllabus</div>
                                    <div className="m-3  w-full">
                                        <DownloadButtonList data={oldSyllabus}></DownloadButtonList>
                                    </div>
                                </div>
                                <Separator orientation="vertical" className="mx-5"></Separator>
                                <div className="">
                                    <div className="">New Syllabus</div>
                                    <div className="m-3  w-full">
                                        <DownloadButtonList data={newSyllabus}></DownloadButtonList>
                                    </div>
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>)
}

export default PastpapersDialogbox;
