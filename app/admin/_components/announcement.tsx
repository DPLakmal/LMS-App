
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Check, TrashIcon } from 'lucide-react'

import Form from '../lecturers/page'
import DeleteAnnouncementButton from './deleteAnnouncement'
import { revalidatePath } from 'next/cache'
import DeleteAnnouncement from './deleteAnnouncement'
import DeleteButton from './deleteButton'
// import { useState } from 'react'

// const [title, setTitle] = useState('');
// const [description, setDescription] = useState('');

export const Announcement = async () => {


  // get announcenment
  async function getData() {
    const res = await fetch('https://lms-app-backend-api-1.onrender.com/api/announcement')
    revalidatePath('/admin/dashboard')
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }
  const data = await getData()




  return (
    <>
      <Card className="w-fit">
        <CardHeader>
          <CardTitle>Announcements</CardTitle>
          {/* <CardDescription>You have 3 unread messages.</CardDescription> */}
        </CardHeader>
        <CardContent className="grid gap-4 ">
          <div className='space-y-4'>
            {data.map((announcement: any, index: number) => (
              <div className="bg-gray-200 rounded-lg p-3 flex-row-2">
                <div
                  key={index}
                  className=" mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <div className="flex flex-row gap-3  justify-between">

                      <p className="text-sm font-medium leading-none">
                        {announcement.title}
                      </p>
                      <DeleteButton id={announcement._id} />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {announcement.description}
                    </p>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" >
            <Check className="mr-2 h-4 w-4" /> More
          </Button>

          <Form />
        </CardFooter>
      </Card>
    </>
  )
}
