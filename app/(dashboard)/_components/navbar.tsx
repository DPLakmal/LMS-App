import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'
import { Logo } from './logo'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'


export const NavBar = async () => {
    const session = await getServerSession(authOptions)

    return (
        <div className="px-5 py-0 gap-x-4 flex-row flex w-full h-20 fixed items-center justify-between bg-white border-b z-[49] pl-6 ">
            <Link href={'/'}>
                <Logo />
            </Link>
            <div className="ml-auto hidden lg:block">
                <div className="flex items-center relative">
                    <Input
                        type="search"
                        placeholder="Search for a course"
                        className=" flex h-10 border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full lg:w-[600px] rounded-lg rounded-r-none focus-visible:ring-transparent pr-8"
                    />
                    <Button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-sky-700 text-white hover:bg-sky-700/80 h-10 px-4 py-2 rounded-l-none">

                        <Search className=" e left-2.5 top-2.5 h-4 w-4 " />
                    </Button>
                </div>

            </div>

            {/* {session ?
                (<Link href={"/api/auth/signout?callbackUrl=/"}>Logout</Link>) :
                (<Link href={"/api/auth/signin?"}>Login</Link>)
            } */}

            <div className="ml-auto">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="overflow-hidden rounded-full"
                        >
                            <Image
                                src={session?.user.image}
                                width={40}
                                height={40}
                                alt="Avatar"
                                className="overflow-hidden rounded-full"
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>
                            <h1 className='text-lg'>{session?.user.name}
                            </h1>
                            <p>{session?.user.email}</p>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <Link href={'/api/auth/signout?callbackUrl=/'}>
                            <DropdownMenuItem >Logout</DropdownMenuItem>
                        </Link>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
