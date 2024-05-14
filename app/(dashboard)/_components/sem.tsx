import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const semesters = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
];

const SEM = () => {
    return (
        <div className="grid gap-3 grid-cols-2">
            {semesters.map((semester, index) => (
                <div key={index} className="semester-card">
                    <Link href={`courses/semester-${semester.id}`}>

                        <Card>
                            <CardHeader>
                                <CardTitle>{`Semester ${semester.id}`}</CardTitle>
                                {/* Add any relevant header content here */}
                            </CardHeader>
                            <CardContent>
                                <p>This is content for Semester {semester.id}</p>
                                {/* Add any relevant content here */}
                            </CardContent>
                            <CardFooter>
                                <p>Footer for Semester {semester.id}</p>
                                {/* Add any relevant footer content here */}
                            </CardFooter>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default SEM;
