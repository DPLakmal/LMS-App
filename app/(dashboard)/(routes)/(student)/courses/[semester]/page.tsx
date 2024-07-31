"use client"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "lucide-react"
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
            const response = await fetch(`https://lms-ati-api.vercel.app/api/courses/semesters?id=${id}` ); // Replace with your actual API endpoint
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

                    <Card className="w-auto">
                        <CardHeader className="bg-slate-100 p-3 rounded-xl m-3">
                            <CardDescription className="text-lg">HNDIT- {subject.code}</CardDescription>
                            <CardTitle className="text-xl ml-6">
                            {subject.title}

                            </CardTitle>
                        </CardHeader>
                        <CardFooter className='flex justify-between gap-6 w-1/2'>
                            {/* <Badge>Madam Chandima</Badge> */}
                            <div className="">Credit:   </div>
                            <Progress value={subject.credit*25} />

                        </CardFooter>
                    </Card>
                        {/* <Card >
                            <div className="text-sm m-2"></div>
                            <div className="m-4 "></div>
                            <div className="m-4 flex justify-end">Credit: {subject.credit}</div>

                        </Card> */}
                        
                        </Link>
                </div>
            ))}
        </div>
    );
}

export default SemesterPage;