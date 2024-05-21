"use client"
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import { Check, TrashIcon } from 'lucide-react'


import DeleteAnnouncementButton from './deleteAnnouncement'
import { revalidatePath } from 'next/cache'
import DeleteAnnouncement from './deleteAnnouncement'
import DeleteButton from './deleteButton'
import Form from './DialogForm'
import loading from '@/app/(dashboard)/(routes)/(student)/courses/loading'
import error from 'next/error'
import { useState, useEffect } from 'react'
// import { useState } from 'react'

// const [title, setTitle] = useState('');
// const [description, setDescription] = useState('');

interface Announcement {
  title: string;
  description: string;
  link: string
}


export const Announcement = () => {
  const [data, setData] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {

    async function getData() {
      try {
        const res = await fetch('https://lms-ati-api.vercel.app/api/announcement')

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


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
              <div className="bg-gray-200 rounded-lg p-3 flex-row-2" key={index}>
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
        <CardFooter className='flex justify-end'>


          <Form />
        </CardFooter>
      </Card>
    </>
  )
}
