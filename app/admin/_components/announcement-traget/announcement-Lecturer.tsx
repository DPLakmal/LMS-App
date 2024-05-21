"use client"

import { useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Form from './L_DialogForm';



interface Announcement {
  title: string;
  description: string;
  link: string,
  lecturer: string
}

export const LecturerAnnouncement = () => {
  const [data, setData] = useState<Announcement[]>([]);
  // const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('https://lms-ati-api.vercel.app/api/lecturerannouncement');

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await res.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        // setLoading(false);
      }
    }

    fetchData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Announcements For You</CardTitle>
        </CardHeader>
        <Suspense fallback={<p className='w-20 h-20 bg-red-500'>Loading feed...</p>}>
          <CardContent className="grid gap-4">
            <div className='space-y-3'>
              {data.map((announcement, index) => (
                <div className="bg-gray-200 rounded-lg p-3 flex-row-2" key={index}>
                  <div
                    className="mb-2 grid grid-cols-[25px_1fr] items-start pb-3 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <div className="text-base font-medium leading-none  mb-3">
                        {announcement.title}
                      </div>
                      <div className="text-sm w-full">
                        {announcement.description}
                      </div>
                      <div className={announcement.lecturer ? "" : "hidden"}>
                        <Badge className='bg-sky-300'>@{announcement.lecturer}</Badge>
                      </div>
                      <div className={announcement.link ? "flex justify-center" : "hidden"}>
                        <Button className='bg-blue-400'>Click here</Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

        </Suspense>
        <CardFooter>
          <Form />
        </CardFooter>
      </Card>
    </>
  );
};
