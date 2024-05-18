import SEM from "@/app/(dashboard)/_components/sem";


const CoursesPage = () => {

    return (<div className="md:my-4 md:flex  md:flex-col flex-row  ">
        <div className="">
            <div className="text-3xl text-center m-4">Semesters</div>
            <SEM></SEM>
        </div>
    </div >);
}

export default CoursesPage;