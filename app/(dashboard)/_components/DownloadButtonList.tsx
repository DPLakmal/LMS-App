// "use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Download, File } from 'lucide-react'
import Link from 'next/link'


// const week1 = [{
//     title: "Working with NetBeans IDE",
//     link: "/next.svg"
// },
// {
//     title: "Working with NetBeans IDE",
//     link: "/next.svg"
// }

// ]

const DownloadButtonList = ({ data = [] }: any) => {
    return (
        <div className="">
            <div className=" w-auto   h-fit ">
                {data.map((file: any, index: any) => (
                    <div className="mb-3" key={index}>
                        <div className="flex flex-col  p-1 h-full w-fit bg-slate-100 rounded-lg" >
                            <div className="flex justify-between gap-4 ">
                                <Button variant={'outline'} className=''>
                                    <File className="mr-2 h-4 w-4" />{file.title}
                                </Button>
                                <Link href={file.link} target="_blank" download>
                                    <Button variant={'outline'} className='rounded-full'>
                                        <Download className=" h-4 w-4" />
                                    </Button>
                                </Link>
                            </div></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DownloadButtonList
