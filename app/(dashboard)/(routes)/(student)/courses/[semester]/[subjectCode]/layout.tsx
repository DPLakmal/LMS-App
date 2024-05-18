'use client'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card'
import Link from 'next/link'
import { useParams, } from 'next/navigation'


const SubjectPageLayout = ({ children }: { children: React.ReactNode }) => {
    const params = useParams<{ subjectCode: string; }>()

    return (
        <div className="w-full m-3">
            <div className="flex flex-col md:flex-row gap-4 ">
                <div className="">

                    <Card className="w-auto">
                        <CardHeader className='bg-slate-100 p-3 rounded-xl m-3'>
                            <CardDescription className="text-lg">HNDIT- {params.subjectCode}</CardDescription>
                            <CardTitle className="text-xl ml-6">
                                Object Oriented Programmings
                            </CardTitle>
                        </CardHeader>
                        {/* <CardContent >
                        </CardContent> */}
                        <CardFooter>
                            <Badge> Madam Chandima </Badge>
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-auto ">
                    <Card>
                        <div className="text-xl p-2 text-center ">Announcements </div>
                        <CardContent>
                            <div className="bg-slate-200 p-1 rounded-xl">
                                <div className="flex flex-row gap-x-4  items-center m-1 ">
                                    <CardDescription className='pl-3'>Assignment</CardDescription>
                                    <Badge variant="outline" className=' bg-green-500'>available</Badge>
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
    )
}

export default SubjectPageLayout
