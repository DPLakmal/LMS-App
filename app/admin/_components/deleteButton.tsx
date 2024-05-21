"use client"
import { Button } from "@/components/ui/button";
// import DeleteAnnouncement from "./deleteAnnouncement";
import { TrashIcon } from "lucide-react";



import axios from "axios";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";



async function deleteAnnouncement(_id: any) {
    try {
        const response = await axios.delete(`https://lms-ati-api.vercel.app/api/announcement?id=${_id}`);

        console.log('Announcement deleted successfully:', response.data,);
        return { success: true, message: response.data };

    } catch (error) {
        console.error('Error deleting announcement:', error);
    }


}

const DeleteButton = ({ id }: any) => {
    const { toast } = useToast()
    return (

        <Button className="hover:bg-red-300" variant="outline" size="icon" onClick={async () => {
            const result = await deleteAnnouncement(id);
            toast(
                {
                    className: "bg-red-300",
                    title: result?.message,

                });
        }}
        >
            <TrashIcon className="h-4 w-4" />
        </Button>
    );
}

export default DeleteButton;