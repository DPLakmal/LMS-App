"use client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddStudentForm from "./AddStudentForm";
import Upload from "./upload";
import Gallery from "./display";
import { Skeleton } from "@/components/ui/skeleton";

const baseurl = "https://nestjs-lms-restapi.onrender.com/students";

const StudentResults: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [count, setCount] = useState<any>(0);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl);
        setData(response.data);
        const responsecount = await axios.get(`${baseurl}?count=true`);
        setCount(responsecount.data);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    console.log(data);
  }, []);

  return (
    <div className="">
      <div className="flex flex-row  justify-between gap-4 m-6">
        <Card className="text-center p-3">
          <div className="m-1">No Student</div>
          <p>{count.count}</p>
        </Card>
        <Card>
          <div className="p-4">No Student</div>
        </Card>
      <Dialog>
        <DialogTrigger>
          <Button className="gap-2 m-3">
            <PlusCircleIcon />
            Add student
          </Button>
        </DialogTrigger>
        <DialogContent>
          <AddStudentForm />
        </DialogContent>
      </Dialog>
      </div>

      <Card>
        <CardContent>
          <div className="grid grid-col-4">
            <div className="flex flex-row gap-5 m-3">
              <div className="border-r w-48">Registration No</div>
              <div className="border-r w-32">Name</div>
              <div className="border-r w-32">Academic Year</div>
              <div className="w-32">Status</div>
            </div>
            {isloading ? (
              data.map((student) => (
                <Link href={`students/${student.regno}`} key={student.id}>
                  <Card className="m-2 hover:bg-slate-300">
                    <div className="flex flex-row gap-5 m-3  ">
                      <div className="w-48 ">
                        GAL/{student.academicyear}/IT/F/0{student.regno}
                      </div>
                      <div className="w-36 whitespace-nowrap">{student.firstname + " " + student.lastname}</div>
                      <div className="w-32">{student.academicyear}</div>
                      <div className="w-32">{student.isactive ? "Active" : "Suspended"}</div>
                    </div>
                  </Card>
                </Link>
              ))
            ) : (
              <>
                <div className="flex flex-col gap-y-6">
                  <div className="flex items-center gap-4 w-full">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[500px]" />
                      <Skeleton className="h-4 w-[300px]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[500px]" />
                      <Skeleton className="h-4 w-[300px]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[500px]" />
                      <Skeleton className="h-4 w-[300px]" />
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[500px]" />
                      <Skeleton className="h-4 w-[300px]" />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>

      
    </div>
  );
};

export default StudentResults;
