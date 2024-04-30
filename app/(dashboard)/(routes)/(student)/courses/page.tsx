import Content from "@/app/(dashboard)/_components/content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const CoursesPage = () => {
    return (<div className="md:my-4 flex flex-col">
        <div className="">
            <Tabs defaultValue="Semester 1" className="w-full">
                <TabsList>
                    <TabsTrigger value="Semester 1">Semester 1 </TabsTrigger>
                    <TabsTrigger value="Semester 2">Semester 2 </TabsTrigger>
                    <TabsTrigger value="Semester 3">Semester 3 </TabsTrigger>
                    <TabsTrigger value="Semester 4">Semester 4 </TabsTrigger>
                </TabsList>
                <TabsContent value="Semester 1"><Content /></TabsContent>
                <TabsContent value="Semester 2"><Content /></TabsContent>
                <TabsContent value="Semester 3"><Content /></TabsContent>
                <TabsContent value="Semester 4"><Content /></TabsContent>
            </Tabs>

        </div>

    </div>);
}

export default CoursesPage;