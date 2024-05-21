
import axios from "axios";

async function DeleteAnnouncement({ ItemID }: any) {
    try {
        const response = await axios.delete(`https://lms-ati-api.vercel.app/api/announcement?id=${ItemID}`);
        console.log('Announcement deleted successfully:', response.data);

    } catch (error) {
        console.error('Error deleting announcement:', error);
    }


}


export default DeleteAnnouncement;