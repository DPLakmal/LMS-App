import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const Week = () => {
    return (
        <div className="">
            <Tabs defaultValue="week1" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="week1">Week 1</TabsTrigger>
                    <TabsTrigger value="week2">Week 2</TabsTrigger>
                    <TabsTrigger value="week3">Week 3</TabsTrigger>
                    <TabsTrigger value="week4">Week 4</TabsTrigger>
                    <TabsTrigger value="week5">Week 5</TabsTrigger>
                    <TabsTrigger value="week6">Week 6</TabsTrigger>
                    <TabsTrigger value="week7">Week 7</TabsTrigger>
                    <TabsTrigger value="week8">Week 8</TabsTrigger>
                    <TabsTrigger value="week9">Week 9</TabsTrigger>
                    <TabsTrigger value="week10">Week 10</TabsTrigger>
                    <TabsTrigger value="week11">Week 11</TabsTrigger>
                    <TabsTrigger value="week12">Week 12</TabsTrigger>
                </TabsList>
                <div className=" w-screen   h-full bg-slate-400 ">
                    <TabsContent value="week1">
                        Make changes to your account here.
                    </TabsContent>
                    <TabsContent value="week2">Change your password here.</TabsContent>
                </div>

            </Tabs>
        </div>
    )
}

export default Week
