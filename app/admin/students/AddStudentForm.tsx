"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import Upload from "./upload";
import { useState } from "react";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";

export default function AddStudentForm() {
  const [formData, setFormData] = useState({
    regno: 1,
    firstname: "",
    lastname: "",
    academicyear: 2023,
    isactive: true,
    profilepicture: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? Number(value) : type === "radio" ? checked : value,
    });
  };

  const handleFileChange = (url: string) => {
    setFormData({
      ...formData,
      profilepicture: url,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
      const response = await axios.post("https://nestjs-lms-restapi.onrender.com/students", formData);
      console.log("Form Data Submitted:", response.data);
      // Handle success (e.g., show a success message or redirect)

      toast({
        title: "New Student submit successfully:",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="w-[500px]">
      <div className="mb-8 font-bold text-lg">New Student Adding Form</div>
      <form onSubmit={handleSubmit} className="space-y-5 bg-neutral-50 p-5 rounded-lg">
        <div className="flex flex-row gap-x-10 items-center">
          <Label className="whitespace-nowrap">Registration No :</Label>
          <Input type="number" name="regno" value={formData.regno} onChange={handleChange} />
        </div>
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
        <div className="flex flex-row gap-x-10 items-center">
          <Label className="whitespace-nowrap">Academic Year</Label>
          <Input
            type="number"
            name="academicyear"
            value={formData.academicyear}
            onChange={handleChange}
            className="max-w-fit"
          />
        </div>
        <div className="flex items-center space-x-4">
          <Label>Active</Label>
          <Switch id="airplane-mode" name="isactive" checked={formData.isactive} onChange={handleChange} />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Profile Picture :</Label>
          <Upload onChange={handleFileChange} />{" "}
          {/* Assume Upload component calls handleFileChange with the uploaded URL */}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
