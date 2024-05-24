"use client"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form";
import { InputForm } from "./s";
import { useState } from "react";

const CoursesAdminPage = () => {

    // const subject = [

    // ]

    const firstSemster = [
        {
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


    const [selectedSubject, setSelectedSubject] = useState("");
    const [selectedWeek, setSelectedWeek] = useState("");

    // // Your data for subjects and weeks
    // const firstSemester = [{ code: "CS101", title: "Computer Science 101" }, { code: "ENG101", title: "English 101" }];
    // const weeks = [{ id: 1 }, { id: 2 }, { id: 3 }];

    return (
        <>
            <div className="w-full space-y-4">
                <label htmlFor="" className="p-3">Select Subject :</label>
                <Select>
                    <SelectTrigger className="w-[480px]">
                        <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                        {firstSemster.map((item: any) => (
                            <SelectItem key={item.code} value={item.code} onSelect={() => setSelectedSubject(item.code)}>
                                {item.code} - {item.title}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <label htmlFor="" className="p-3">Select Week :</label>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select Week No" />
                    </SelectTrigger>
                    <SelectContent>
                        {weeks.map((item: any) => (
                            <SelectItem key={item.id} value={item.id} onSelect={() => setSelectedWeek(item.id)}>
                                Week - {item.id}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <InputForm subjectCode={selectedSubject} weekId={selectedWeek} />

            </div>
        </>
    );
}

export default CoursesAdminPage;
