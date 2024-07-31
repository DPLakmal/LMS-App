import Week from "@/app/(dashboard)/_components/week";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CoursesAdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-cols-[auto,1fr] gap-10">
            <Card>
                <CardHeader>
                    <CardTitle>Add  Content to week </CardTitle>
                    {/* <CardDescription>Card Description</CardDescription> */}
                </CardHeader>
                <CardContent className="bg-neutral-50 p-5 rounded-lg m-4">
                    {children}
                </CardContent>
           
            </Card>

            <Week id={1} subject_code={1012}/>
        </div>
    );
}

export default CoursesAdminLayout;