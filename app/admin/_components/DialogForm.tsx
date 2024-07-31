"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { DialogHeader, DialogFooter, DialogTitle, Dialog, DialogContent, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { revalidatePath, revalidateTag } from 'next/cache';
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle } from 'lucide-react';





function Form() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const handleChange = (e: any) => {
        console.log(e);

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://lms-ati-api.vercel.app/api/announcement', formData);
            console.log('Form data submitted successfully:', response.data);

        } catch (error) {
            console.error('Error submitting form data:', error);
        }

    };


    const handleClick = () => {

        toast({
            className: "bg-green-300",
            title: "Publish That Announcement For All Student !",
            description: `Title: ${formData.title}`,
        })

        // formData.title = '',
        // formData.description = ''

    };

    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline">
                <PlusCircle className='mx-2'/>
                    Add Announcement</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle >
                          
                            Add Announcement</DialogTitle>
                        <DialogDescription>
                            for all student
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">

                            <label>Title:</label>
                            <Textarea
                                name="title"
                                value={formData.title}
                                onChange={handleChange} className="col-span-3 p-4" />


                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label>
                                Description:
                            </label>
                            <Textarea

                                name="description"
                                value={formData.description}
                                onChange={handleChange} className="col-span-3 p-4" />

                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleClick}>Publish</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default Form;