
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AddLecturerButton from "../_components/AddLecturerButton";
import DisplayLecturerList from "../_components/DisplayLecturerList";
import { Separator } from "@/components/ui/separator";
import Years from "../_components/years";

const LecturerPage = () => {
    return (<>

        <div className="flex h-20">

            <div className="">
                <div className="">
                    <div className="md:my-4 md:flex  md:flex-col flex-row  ">
                        <div className="">
                            <Tabs defaultValue="Year 1">
                                <div className="flex justify-center">
                                    <TabsList className="grid grid-cols-2 h-12 w-[600px]">
                                        <TabsTrigger className="py-2.5" value="Year 1">
                                            Year 1
                                        </TabsTrigger>
                                        <TabsTrigger className="py-2.5" value="Year 2">
                                            Year 2{' '}
                                        </TabsTrigger>
                                    </TabsList>
                                </div>
                                <TabsContent value="Year 1">
                                    <Years YearId={1} />
                                </TabsContent>
                                <TabsContent value="Year 2">
                                    <Years YearId={2} />
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>

            </div>
            <Separator orientation="vertical" className="mx-5" />
            <div className="flex justify-between flex-col">
                <div className="text-2xl m-6">Our Lecturer Pannel</div>
                <div className="m-5">
                    <DisplayLecturerList></DisplayLecturerList>
                </div>



                <AddLecturerButton />


            </div>

        </div>
    </>
    );
}

export default LecturerPage;