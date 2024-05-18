"use client"
import React, { useState } from 'react';
import axios from 'axios';
import { DialogHeader, DialogFooter, DialogTitle, Dialog, DialogContent, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';



function AddLecturerButton() {
    const [formData, setFormData] = useState({
        name: '',
        status: '',
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

        } catch (error) {
            console.error('Error submitting form data:', error);
        }

    };


    const handleClick = () => {

        toast({
            title: formData.name,
            description: formData.status,
        })

    };
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary"> Add Lecturer</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <form onSubmit={handleSubmit}>
                    <DialogHeader>
                        <DialogTitle> Add Lecturer</DialogTitle>
                        <DialogDescription>
                            {/* Make changes to your profile here. Click save when you're done. */}
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">

                            <label>Lecturer&apos;s Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange} className="col-span-3 p-2 border-1" />

                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <label>
                                Status:
                            </label>
                            <input
                                type="text"
                                name="status"
                                value={formData.status}
                                onChange={handleChange} className="col-span-3 p-2 border-1" />


                            {/* <Select name='status' onValueChange={handleChange}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Status" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="inactive">Inactive</SelectItem>
                                    <SelectItem value="cisting">Visting</SelectItem>
                                </SelectContent>
                            </Select> */}

                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" onClick={handleClick}

                        >Publish</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog >
    );
}

export default AddLecturerButton;