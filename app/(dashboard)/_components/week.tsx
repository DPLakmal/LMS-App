
"use client"
import { Separator } from '@/components/ui/separator'
import DownloadButtonList from './DownloadButtonList'
import { useEffect, useState } from 'react';

const Week = ({ id }: any) => {
    const [Lms, setLms] = useState([]);
    const [Lecturer, setLecturer] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3001/api/weeks?id=${id}`); // Replace with your actual API endpoint
            const data = await response.json();
            setLms(await data?.lms.map((item: any) => ({ title: item.title, link: item.link })));
            setLecturer(await data?.lecturer.map((item: any) => ({ title: item.title, link: item.link })));
        };
        fetchData();
    }, [id]);


    return (
        <div className="">
            <div className=" w-auto   h-fit ">
                <div className="h-fit">
                    <p className='mb-3'> LMS Resources</p>
                    <div className="">
                        <DownloadButtonList data={Lms}></DownloadButtonList>
                    </div>
                </div>
                <Separator className='mx-2' />
                <div className=" h-auto my-3">Lecturer&apos;s Resources</div>
                <div className="mr-6">

                    <div className="">
                        <DownloadButtonList data={Lecturer}></DownloadButtonList>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Week
