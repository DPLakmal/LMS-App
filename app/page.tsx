import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";

export default async function Home() {

  return <main className="flex items-center justify-center h-screen">
    <Link href={"/dashboard"}>
      <Button size={'lg'}>
        Go to LMS Dashboard
      </Button>

    </Link>
  </main>
}