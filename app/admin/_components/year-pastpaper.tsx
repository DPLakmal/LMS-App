import { Poppins } from 'next/font/google'
import { Separator } from '@/components/ui/separator'
import { Card } from '@/components/ui/card'
import { DialogHeader } from '@/components/ui/dialog'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { Download, File } from 'lucide-react'
const poppins = Poppins({ weight: '600', subsets: ['latin'] })

export default function Years({ YearId }: { YearId: number }) {
    const firstSemster = [
        {
            code: '1012',
            title: 'Visual Application Programming',
            coverImg: '',
            credit: 4,
            subjects: [],
        },
        {
            code: '1022',
            title: 'Web Design',
            coverImg: '',
            credit: 4,
            subjects: [],
        },
        {
            code: '1032',
            title: 'Computer and Network Systems',
            coverImg: '',
            credit: 4,
            subjects: [],
        },
        {
            code: '1042',
            title: 'Information Management and Information Systems',
            coverImg: '',
            credit: 4,
            subjects: [],
        },
        {
            code: '1052',
            title: 'ICT Project (Individual)',
            coverImg: '',
            credit: 4,
            subjects: [],
        },
        {
            code: '1062',
            title: 'Communication Skills',
            coverImg: '',
            credit: 4,
            subjects: [],
        },
    ]
    const secondSemster = [
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
    ]

    const thirdSemster = [
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
    ]
    const fourthSemster = [
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

    return (
        <div className="">
            <div className="">
                <div className="space-y-1"></div>
                <div className="flex h-full">
                    <div className="w-[400px] m-5 bg-slate-100 p-4 rounded-lg">
                        <div className="text-2xl m-3 text-center">Semester 1</div>
                        <div className="space-y-2 ">
                            {(YearId == 1 ? firstSemster : thirdSemster).map((subject) => (
                                <Card key={subject.code}>



                                    <div className="m-3 pl-4">{subject.code} - {subject.title}</div>
                                    <div className="my-1 flex justify-evenly">
                                        {/* 
                                        <Button className=''>
                                            @ Assigned :
                                        </Button>
                                        <Badge className='text-sm' variant={'outline'}>gsdgfdsfgdsfg</Badge> */}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div className="w-[400px] m-5 bg-slate-100 p-4 rounded-lg">
                        <div className="text-2xl m-3 text-center">Semester 2</div>
                        <div className=" space-y-2 ">
                            {(YearId == 1 ? secondSemster : fourthSemster).map((subject) => (

                                <>
                                    <Accordion type="multiple">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>
                                                <Card key={subject.code}>

                                                    <div className="m-3 pl-4 text-md">{subject.code} - {subject.title}</div>
                                                </Card>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="m-3 flex flex-col space-y-1 p-1 h-full w-fit bg-slate-100 rounded-lg ml-3" >
                                                    <div className="flex justify-between gap-4 ">

                                                        <Button variant={'outline'} className=''>
                                                            <File className="mr-2 h-4 w-4" />{"file.title"}
                                                        </Button>
                                                        <Link href={"DFg"} target="_blank" download>
                                                            <Button variant={'outline'} className='rounded-full'>
                                                                <Download className=" h-4 w-4" />
                                                            </Button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>

                                </>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
