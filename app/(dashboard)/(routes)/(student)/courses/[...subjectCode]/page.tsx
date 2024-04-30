import Week from "@/app/(dashboard)/_components/week";

const SubjectPage = ({ params }: { params: { slug: string } }) => {
  return (

    <div className="w-full">
      <div className="mt-6">
        <Week />
      </div>
    </div>
  );
}

export default SubjectPage;