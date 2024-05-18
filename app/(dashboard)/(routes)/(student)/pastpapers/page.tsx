import Years from '@/app/(dashboard)/_components/years'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'

const PastpapersPage = () => {
    return (
        <div className="">
            <div className="text-3xl text-center m-3">HNDIT - Past Papers</div>
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
    )
}

export default PastpapersPage
