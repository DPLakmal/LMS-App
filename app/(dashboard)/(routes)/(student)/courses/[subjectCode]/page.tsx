import Week from "@/app/(dashboard)/_components/week";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const SubjectPage = ({ params }: { params: { slug: string } }) => {
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

  return (


    <div className="w-full">
      <div className="mt-6">
        <div className="grid grid-cols-3 gap-5">
          {weeks.map((week) => (
            <div className="">

              <Card>
                <CardHeader>
                  <CardTitle>week {week.id}</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>

            </div>
          ))}



        </div>
        {/* <Week params={{
          id: "week1"
        }} /> */}
      </div>
    </div>
  );
}

export default SubjectPage;