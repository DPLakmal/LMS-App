// "use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EnvelopeOpenIcon } from '@radix-ui/react-icons'
import { File } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Week = ({ params }: { params: { id: string } }) => {
    // const pathname = usePathname()
    return (
        <div className="">
            <Tabs defaultValue="week1" className="w-[400px]">
                <TabsList>
                    <Link href={`/week1`}>
                        <TabsTrigger value="week1">Week 1</TabsTrigger>
                    </Link>
                    <TabsTrigger value="week2">Week 2</TabsTrigger>
                    <TabsTrigger value="week3">Week 3</TabsTrigger>
                    <TabsTrigger value="week4">Week 4</TabsTrigger>
                    <TabsTrigger value="week5">Week 5</TabsTrigger>
                    <TabsTrigger value="week6">Week 6</TabsTrigger>
                    <TabsTrigger value="week7">Week 7</TabsTrigger>
                    <TabsTrigger value="week8">Week 8</TabsTrigger>
                    <TabsTrigger value="week9">Week 9</TabsTrigger>
                    <TabsTrigger value="week10">Week 10</TabsTrigger>
                    <TabsTrigger value="week11">Week 11</TabsTrigger>
                    <TabsTrigger value="week12">Week 12</TabsTrigger>
                </TabsList>
                <div className=" w-auto   h-full ">
                    <TabsContent value="week1">
                        <div className="flex flex-col-3 gap-x-4 justify-between">

                            <div className="flex mx-10">
                                <div className="h-40">
                                    <p className='m-3'> LMS Resources</p>
                                    <div className=" flex flex-col space-y-3 p-3 h-full w-[300px] bg-slate-200 rounded-lg">
                                        <Button className=''>
                                            <File className="mr-2 h-4 w-4" />Working with NetBeans IDE
                                        </Button>
                                        <Button>
                                            <File className="mr-2 h-4 w-4" /> Login with Email
                                        </Button>
                                    </div>
                                </div>
                                <Separator orientation="vertical" className='mx-20' />
                                <div className=" h-40">Lecture Resources</div>
                                <Separator orientation="vertical" className='mx-20' />
                                <div className=" h-40">Assignmenet</div>
                            </div>

                        </div>
                    </TabsContent>
                    <TabsContent value="week2">Change your password here.</TabsContent>
                </div>

            </Tabs>
        </div>
    )
}

export default Week
