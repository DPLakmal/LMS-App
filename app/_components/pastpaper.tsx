import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Years from "../admin/_components/years";


const Pastpapers = () => {
    return (
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
    );
}

export default Pastpapers;