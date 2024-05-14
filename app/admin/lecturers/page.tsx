"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { DialogHeader, DialogFooter, DialogTitle, Dialog, DialogContent, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { revalidatePath, revalidateTag } from 'next/cache';
import * as DialogPrimitive from "@radix-ui/react-dialog"



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
            const response = await axios.post('https://lms-app-backend-api-1.onrender.com/api/announcement', formData);
            console.log('Form data submitted successfully:', response.data);
            revalidatePath('/', 'page')
        } catch (error) {
            console.error('Error submitting form data:', error);
        }

    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">

                            <label>Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange} className="col-span-3" />

                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label>
                                Description:
                            </label>
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange} className="col-span-3" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={() => {
                            toast({
                                title: formData.title,
                                description: formData.description,
                            }),

                                (DialogPrimitive.Close
                                )
                        }

                        }>Publish</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default Form;
