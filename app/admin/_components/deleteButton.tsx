"use client"
import { Button } from "@/components/ui/button";
import DeleteAnnouncement from "./deleteAnnouncement";
import { TrashIcon } from "lucide-react";

const DeleteButton = ({ id }: any) => {
    return (


        <Button variant="outline" size="icon" onClick={() => DeleteAnnouncement(id)}>
            <TrashIcon className="h-4 w-4" />
        </Button>
    );
}

export default DeleteButton;