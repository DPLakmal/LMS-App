"use client"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { InputForm } from "./s";
import { useState } from "react";

const CoursesAdminPage = () => {

    const subject = [{
        code: '1012',
        title: 'Visual Application Programming',

    },
    {
        code: '1022',
        title: 'Web Design',

    },
    {
        code: '1032',
        title: 'Computer and Network Systems',

    },
    {
        code: '1042',
        title: 'Information Management and Information Systems',

    },
    {
        code: '1052',
        title: 'ICT Project (Individual)',

    },
    {
        code: '1062',
        title: 'Communication Skills',

    },
    {
        code: '2012',
        title: 'Fundamentals of Programming',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '2022',
        title: 'Software Development',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '2032',
        title: 'System Analysis and Design',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '2042',
        title: 'Data communication and Computer Networks',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '2052',
        title: 'Principles of User Interface Design',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '2062',
        title: 'ICT Project (Group)',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '2072',
        title: 'Technical Writing',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '2082',
        title: 'Human Value and Professionalism',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '3012',
        title: 'Object Oriented Programming',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '3022',
        title: 'Web Programming',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '3032',
        title: 'Data Structures and Algorithms',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '3042',
        title: 'Database Management Systems',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '3052',
        title: 'Operating Systems',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '3062',
        title: 'Information and Computer Security',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '3072',
        title: 'Statistics for IT',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '4012',
        title: 'Software Engineering',
    },
    {
        code: '4022',
        title: 'Software Quality Assurance',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '4032',
        title: 'IT Project Management',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '4042',
        title: 'Professional World',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '4052',
        title: 'Programming Individual Project',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '4212',
        title: 'Machine Learning',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '4222',
        title: 'Business Analysis Practice',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '4232',
        title: 'Enterprise Architecture',
        coverImg: '',
        credit: 4,
        subjects: [],
    },
    {
        code: '4242',
        title: 'Computer Services Management',
        coverImg: '',
        credit: 4,
        subjects: [],
    },

    ]


    const weeks = [
        { "id": 1 },
        { "id": 2 },
        { "id": 3 },
        { "id": 4 },
        { "id": 5 },
        { "id": 6 },
        { "id": 7 },
        { "id": 8 },
        { "id": 9 },
        { "id": 10 },
        { "id": 11 },
        { "id": 12 },
        { "id": 13 },
        { "id": 14 },
        { "id": 15 }
    ]
        ;

    const [subjectCode, setSubjectCode] = useState("");
    const [weekId, setWeekId] = useState("");

    const handleSubjectChange = (value: string) => {
        setSubjectCode(value);
    };

    const handleWeekChange = (value: string) => {
        setWeekId(value);
    };

    // // Your data for subjects and weeks
    // const firstSemester = [{ code: "CS101", title: "Computer Science 101" }, { code: "ENG101", title: "English 101" }];
    // const weeks = [{ id: 1 }, { id: 2 }, { id: 3 }];

    return (
        <>
            <div className="w-full space-y-4">
                <label htmlFor="" className="p-3">Select Subject :</label>
                <Select onValueChange={handleSubjectChange}>
                    <SelectTrigger className="w-[480px]">
                        <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                        {subject.map((item: any) => (
                            <SelectItem key={item.code} value={item.code} >
                                {item.code} - {item.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <label htmlFor="" className="p-3">Select Week :</label>
                <Select onValueChange={handleWeekChange}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Week No" />
                    </SelectTrigger>
                    <SelectContent>
                        {weeks.map((item: any) => (
                            <SelectItem key={item.id} value={item.id} >
                                Week - {item.id}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <InputForm subjectCode={subjectCode} weekId={weekId} />

            </div>
        </>
    );
}

export default CoursesAdminPage;