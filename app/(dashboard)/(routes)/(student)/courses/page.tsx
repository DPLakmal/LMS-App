import Semesters from "@/app/(dashboard)/_components/semesters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const CoursesPage = () => {
    return (<div className="md:my-4 md:flex  md:flex-col flex-row  ">
        <div className="">
            <Tabs defaultValue="Semester 1" className="w-full ">
                {/* <div className="fixed z-20 w-fit inset-x-0 top-20"> */}
                <TabsList className="inline-flex">
                    <TabsTrigger value="Semester 1">Semester 1 </TabsTrigger>
                    <TabsTrigger value="Semester 2">Semester 2 </TabsTrigger>
                    <TabsTrigger value="Semester 3">Semester 3 </TabsTrigger>
                    <TabsTrigger value="Semester 4">Semester 4 </TabsTrigger>
                </TabsList>
                {/* </div> */}

                <TabsContent value="Semester 1"><Semesters semester={1} /></TabsContent>
                {/* <TabsContent value="Semester 2"><Content /></TabsContent>
                <TabsContent value="Semester 3"><Content /></TabsContent>
                <TabsContent value="Semester 4"><Content /></TabsContent> */}
            </Tabs>

        </div>

    </div>);
}

export default CoursesPage;