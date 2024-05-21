import { Announcement } from "../_components/announcement";
import { LecturerAnnouncement } from "../_components/announcement-traget/announcement-Lecturer";

const Dashboard = () => {
    return (
        <div className="">
            <Announcement></Announcement>
            <LecturerAnnouncement />
        </div>
    );
}

export default Dashboard;