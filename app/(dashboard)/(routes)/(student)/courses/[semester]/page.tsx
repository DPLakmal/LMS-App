"use client"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"


const SemesterPage = () => {
    const pathaname = usePathname()


    const parts = pathaname.split("-");
    const id = parseInt(parts[parts.length - 1]);


    const [subject, setSubject] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://lms-ati-api.vercel.app/api/courses/semesters?id=${id}`, { cache: 'force-cache' }); // Replace with your actual API endpoint
            const data = await response.json();

            setSubject(await data?.subjects.map((item: any) => ({ title: item.title, code: item.code, credit: item.credit })));

        };

        fetchData();
    }, [id]);
    return (
        <div className="grid grid-cols-2 gap-3" >
            {subject.map((subject: any, index) => (
                <div className="" key={index}>
                    <Link href={`/courses/semester-1/${subject.code}`}>
                        <Card >
                            <div className="text-sm m-2">{subject.code}</div>
                            <div className="m-4 ">{subject.title}</div>
                            <div className="m-4 ">{subject.credit}</div>

                        </Card></Link>
                </div>
            ))}
        </div>
    );
}

export default SemesterPage;