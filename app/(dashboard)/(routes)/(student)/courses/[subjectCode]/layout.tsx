'use client'
import { Badge } from '@/components/ui/badge'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
    Card,
    CardHeader,
    CardDescription,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/components/ui/card'
import { Slash } from 'lucide-react'
import { useParams, usePathname } from 'next/navigation'


const SubjectPageLayout = ({ children }: { children: React.ReactNode }) => {
    const params = useParams<{ subjectCode: string; }>()

    return (
        <div className="w-full m-3">
            <div className="flex flex-col md:flex-row gap-4 ">
                <div className="">

                    <Card className="w-auto">
                        <CardHeader>
                            <CardDescription className="text-lg">HNDIT- {params.subjectCode}</CardDescription>
                            <CardTitle className="text-3xl">

                            </CardTitle>
                        </CardHeader>
                        {/* <CardContent>
                            <p>Card Content</p>
                        </CardContent> */}
                        <CardFooter>
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/courses">courses</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator>
                                        <Slash />
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/components">
                                            semester 3
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    <BreadcrumbSeparator>
                                        <Slash />
                                    </BreadcrumbSeparator>
                                    <BreadcrumbItem>
                                        <BreadcrumbLink href="/components">
                                            HNDIT-{params.subjectCode} Object Oriented Programming
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                </BreadcrumbList>
                            </Breadcrumb>
                        </CardFooter>
                    </Card>
                </div>
                <div className="w-auto ">
                    <Card>
                        <CardHeader>
                            <CardTitle>Announcements</CardTitle>
                            <div className="flex flex-row gap-x-4 ">
                                <CardDescription>Assignment</CardDescription>
                                <Badge variant="outline" className=' bg-green-500'>available</Badge>


                            </div>
                        </CardHeader>
                        {/* <CardContent>
                            <p>Card Content</p>
                        </CardContent> */}
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>

            {children}
        </div>
    )
}

export default SubjectPageLayout
