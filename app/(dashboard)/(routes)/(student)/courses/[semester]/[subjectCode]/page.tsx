"use server"
import Week from "@/app/(dashboard)/_components/week";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";




const SubjectPage = ({ params }: {
  params: {
    [x: string]: any; slug: string
  }
}) => {
  // const router = useRouter()
  const weeks = [
    { "id": 1 },
    { "id": 2 },
    { "id": 3 },
    { "id": 4 },
    { "id": 5 },
    { "id": 6 },
    { "id": 7 },
    { "id": 8 },
    { "id": 9 },
    { "id": 10 },
    { "id": 11 },
    { "id": 12 },
    { "id": 13 },
    { "id": 14 },
    { "id": 15 }
  ]

  // console.log(params.subjectCode);


  return (
    <div className="w-full">
      <div className="mt-6">
        <div className="grid grid-cols-3 gap-4">
          {weeks.map((week) => (
            <div key={week.id}>
              <Card >
                <CardHeader className="text-center">
                  <CardTitle >Week {week.id}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Week id={week.id} subject_code={params.subjectCode} ></Week>
                </CardContent>
                <CardFooter>
                  <Button >Open for details in Week {week.id}</Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubjectPage;