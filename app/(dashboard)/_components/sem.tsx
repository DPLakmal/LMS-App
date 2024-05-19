import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import SemesterPage from "../(routes)/(student)/courses/[semester]/page";

const semesters = [
    { id: 1, year: 1, title: "Semster 1" },
    { id: 2, year: 1 },
    { id: 3, year: 2 },
    { id: 4, year: 2 },
];

const SEM = () => {
    return (
        <div className="grid gap-7 grid-cols-2">
            {semesters.map((semester, index) => (
                <div key={index} className="semester-card">
                    <Link href={`courses/semester-${semester.id}`}>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl">{`Semester - ${semester.id}`}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Year {semester.year}</p>
                            </CardContent>
                        </Card>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default SEM;
