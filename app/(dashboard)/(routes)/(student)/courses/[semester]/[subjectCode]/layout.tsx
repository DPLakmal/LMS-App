'use client';
import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface Subject {
    _id: string;
    code: string;
    title: string;
    credit: number;
}

const fetchData = async (subjectCode: string): Promise<Subject> => {
    const response = await fetch(`https://lms-ati-api.vercel.app/api/courses/subject?code=${subjectCode}`);
    const data: Subject = await response.json();
    return data;
};

interface SubjectPageLayoutProps {
    children: React.ReactNode;
}

const SubjectPageLayout: React.FC<SubjectPageLayoutProps> = ({ children }) => {
    const params = useParams<{ subjectCode: string }>();
    const subjectCode = params?.subjectCode; // Default to '1062' if no param is found
    const [subjectData, setSubjectData] = useState<Subject | null>(null);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchData(subjectCode);
            setSubjectData(data);
        };

        getData();
    }, [subjectCode]);

    return (
        <div className="w-full m-3">
            <div className="flex flex-col md:flex-row gap-4">
                <div>
                    <Card className="w-auto">
                        <CardHeader className="bg-slate-100 p-3 rounded-xl m-3">
                            <CardDescription className="text-lg">HNDIT- {subjectCode}</CardDescription>
                            <CardTitle className="text-xl ml-6">
                                {subjectData ? subjectData.title : 'Loading...'}

                            </CardTitle>
                        </CardHeader>
                        <CardFooter className='flex justify-between gap-6'>
                            <Badge>Madam Chandima</Badge>
                            <div className="">Credit:   {subjectData ? subjectData.credit : 'Loading...'}</div>
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-auto">
                    <Card>
                        <div className="text-xl p-2 text-center">Announcements</div>
                        <CardContent>
                            <div className="bg-slate-200 p-1 rounded-xl">
                                <div className="flex flex-row gap-x-4 items-center m-1">
                                    <CardDescription className="pl-3">Assignment</CardDescription>
                                    <Badge variant="outline" className="bg-green-500">available</Badge>
                                    <Link href={`/courses/semester-1/1012/assignment`}>
                                        <Button>Open</Button>
                                    </Link>
                                </div>
                                <div className="p-3 text-sm">
                                    <div className="">Deadline: 2024/03/23</div>
                                    <div className="">countdown: 3 hours</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {children}
        </div>
    );
};

export default SubjectPageLayout;
