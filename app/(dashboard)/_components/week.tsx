
"use client"
import { Separator } from '@/components/ui/separator'
import DownloadButtonList from './DownloadButtonList'
import { useEffect, useState } from 'react';

const Week = ({ id, subject_code }: { id: any, subject_code: any }) => {
    const url = "https://firebasestorage.googleapis.com/v0/b/lms-app-c508c.appspot.com/o/"
    const [Lms, setLms] = useState([]);
    const [Lecturer, setLecturer] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://lms-ati-api.vercel.app/api/${subject_code}/weeks?week_no=${id}`);
            const data = await response.json();
            setLms(await data?.lms.map((item: any) => ({ title: item.title, link: url + item.link })));
            setLecturer(await data?.lecturer.map((item: any) => ({ title: item.title, link: url + item.link })));
        };
        fetchData();
    }, [id]);




    return (
        <div className="">
            <div className=" w-auto   h-fit ">
                <div className="h-fit">
                    {Lms?.length > 0 && (
                        <>

                            <p className='mb-3'> LMS Resources</p>
                            <div className="">
                                <DownloadButtonList data={Lms}></DownloadButtonList>
                            </div>
                        </>

                    )}


                    {Lecturer?.length > 0 && (
                        <>
                            <Separator className='mx-2' />
                            <div className="h-auto my-3">Lecturer's Resources</div>
                            <div className="mr-6">
                                <div className="">
                                    <DownloadButtonList data={Lecturer}></DownloadButtonList>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Week
