"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";

import axios from "axios";
import { ArrowLeft, EditIcon, Trash2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect, Children, ReactNode } from "react";
import AddStudentForm from "../AddStudentForm";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Toast } from "@/components/ui/toast";
import PlaceholderUser from "@/assets/placeholder-user.png"

export default function StudentProfile() {
  const params = useParams<{ tag: string; id: string }>();
  const baseurl = `https://nestjs-lms-restapi.onrender.com/students/${params.id}`;

  const [data, setData] = useState<any>([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl);
        setData(response.data);
        setIsLoading(true);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Link href={"/admin/students"} className="w-[1000px]">
        <Button variant={"outline"} className=" flex justify-start ">
          <ArrowLeft />
        </Button>
      </Link>

      {isloading ? (
        <div className="flex flex-col items-center justify-center gap-6">
          {/* { data.profilepicture ? ( */}
            <Image src={(data.profilepicture.length > 0 && data.profilepicture)? data.profilepicture : PlaceholderUser } alt={""} className="rounded-full" width={200} height={200} />
          {/* ) : ( */}
            <div className=""></div>
          {/* )} */}
          <div className="flex flex-row items-center gap-x-8">
            <Label>Full Name:</Label>
            <div className="">{data.firstname + " " + data.lastname}</div>

            <Dialog>
              <DialogTrigger>
                <Button variant={"ghost"} className="rounded-full">
                  <EditIcon />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Edit Full Name</DialogTitle>
                  <DialogDescription>
                    <EditFullName id={data.regno} firstname={data.firstname} lastname={data.lastname} />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <div className="flex flex-row items-center gap-x-8">
            <Label>Academic Year :</Label>
            <div className="">{data.academicyear}</div>
            <Button variant={"ghost"} className="rounded-full">
              <EditIcon />
            </Button>
          </div>
          <div className="flex flex-row items-center gap-x-8">
            <Label>Registration No:</Label>
            <div className="">
              GAL/{data.academicyear}/IT/F/0{data.regno}
            </div>
            <Button variant={"ghost"} className="rounded-full">
              <EditIcon />
            </Button>
          </div>
          <div className="flex flex-row items-center gap-x-8">
            <Label>Status:</Label>
            <div className="">{data.isactive ? "Active" : "Suspended"}</div>
            <Button variant={"ghost"} className="rounded-full">
              <EditIcon />
            </Button>
          </div>

          <Button onClick={deleteStudent} variant={"destructive"} className="rounded-full w-12 h-12">
            <Trash2Icon />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="h-[200px] w-[200px] rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      )}
    </>
  );

  function EditFullName({ id, firstname, lastname }: { id: number; firstname: string; lastname: string }) {
    const [formData, setFormData] = useState({
      firstname: firstname,
      lastname: lastname,
    });

    const handleChange = (e: any) => {
      setFormData({
        ...formData,
      });
    };

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);
      try {
        const response = await axios.patch(`https://nestjs-lms-restapi.onrender.com/students/${id}`, formData);
        console.log("Form Data Submitted:", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error (e.g., show an error message)
      }
    };

    return (
      <>
        <div className="w-[500px]">
          <form onSubmit={handleSubmit} className="space-y-5 bg-neutral-50 p-5 rounded-lg">
            <div className="flex flex-row gap-x-10 items-center">
              <div>
                <Label>First Name:</Label>
                <Input name="firstname" value={formData.firstname} onChange={handleChange} />
              </div>
              <div>
                <Label>Last Name:</Label>
                <Input name="lastname" value={formData.lastname} onChange={handleChange} />
              </div>
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </>
    );
  }
  function EditStatus({ id, isactive }: { id: number; isactive: boolean }) {
    const [formData, setFormData] = useState({
      isactive: isactive,
    });

    const handleChange = (e: any) => {
      setFormData({
        ...formData,
      });
    };

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      console.log("Form Data Submitted:", formData);
      try {
        const response = await axios.patch(`https://nestjs-lms-restapi.onrender.com/students/${params.id}`, formData);
        console.log("Form Data Submitted:", response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error (e.g., show an error message)
      }
    };

    return (
      <>
        <div className="w-[500px]">
          <form onSubmit={handleSubmit} className="space-y-5 bg-neutral-50 p-5 rounded-lg">
            <div className="flex items-center space-x-4">
              <Label>Active</Label>
              <Switch id="airplane-mode" name="isactive" checked={formData.isactive} onChange={handleChange} />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </>
    );
  }
  async function deleteStudent() {
    try {
      const response = await axios.delete(`https://nestjs-lms-restapi.onrender.com/students/${params.id}`);
      console.log("Form Data Submitted:", response.data);
      Toast({
        title: "Student deleted successfully",
        duration: 3000,
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show an error message)
    }
  }
}
