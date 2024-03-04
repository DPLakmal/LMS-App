import Link from "next/link"

export default function Content() {
    const subjects = [
        { title: "fundermetal programminga", 
     href:"4032"
    },
        { title: "skjfskjf", }, { title: "3", }, { title: "skjfskjf", },
        { title: "skjfskjf", }, { title: "skjfskjf", }, { title: "skjfskjf", }
    ]
    return (
        <div className="min-w-60 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10">
            {subjects.map((item) => (
            
       <Link href={"/4032"}>
       <div  className=" size-72 bg-red-500 rounded-2xl"> {item.title}</div>
       
       </Link>
            ))}
        </div>
    )
}