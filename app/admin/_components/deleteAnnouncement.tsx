"use server"
import { Button } from "@/components/ui/button";
import axios from "axios";
import { TrashIcon } from "lucide-react";
import { revalidatePath, revalidateTag } from "next/cache";

async function DeleteAnnouncement({ ItemID }: any) {
    try {
        const response = await axios.delete(`http://localhost:3001/api/announcement/${ItemID}`);
        console.log('Announcement deleted successfully:', response.data);
        revalidatePath('/admin/dashboard', 'layout')

    } catch (error) {
        console.error('Error deleting announcement:', error);
    }


}


export default DeleteAnnouncement;