"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

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
    async function fetchData() {
      try {
        const res = await fetch('https://lms-ati-api.vercel.app/api/announcement');
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

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Announcements For All Student</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className='space-y-4'>
            {data.map((announcement, index) => (
              <div className="bg-gray-200 rounded-lg p-3 flex-row-2" key={index}>
                <div
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <div className="text-base font-medium leading-none text-center mb-3">
                      {announcement.title}
                    </div>
                    <div className="text-sm  text-pretty">
                      {announcement.description}
                    </div>
                    <div className={announcement.link ? "flex justify-center pt-2" : "hidden"}>
                      <Button className='bg-blue-400'>Click here</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter />
      </Card>
    </>
  );
};
