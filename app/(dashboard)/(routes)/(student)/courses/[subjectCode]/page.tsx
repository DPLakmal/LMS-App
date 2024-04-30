import Week from "@/app/(dashboard)/_components/week";

const SubjectPage = ({ params }: { params: { slug: string } }) => {
  return (

    <div className="w-full">
      <div className="mt-6">
        <Week params={{
          id: "week1"
        }} />
      </div>
    </div>
  );
}

export default SubjectPage;