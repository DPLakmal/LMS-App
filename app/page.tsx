'use client'

import SiderBar from "./(component)/(sidebar)/sideBar";
import Content from "./(component)/(sidebar)/content";
import Nav from "./(component)/(navbar)/nav";
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams<{ tag: string; item: string }>()

  return (
    // <div className="flex items-start justify-between ">
    //   <SiderBar />
    //   <main className="flex flex-col w-full h-full ">
    //     <div className="border-b-2 p-3 "><Nav /></div>

    //     <div className="h-screen w-full m-4">

          // {

          //   // (params.item == "sem1") ?
          //   <Content />
          //   // :
          //   // <div className="">no data</div>

          // }
          // {/* 
          // <div className=" bg-red-400">

          //   console.log(params.item);
          // </div> */}

      //   </div>
      // </main >
    // </div>
  );
}
