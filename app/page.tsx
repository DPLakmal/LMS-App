import SiderBar from "./(component)/(sidebar)/siderBar";
import Content from "./(component)/(sidebar)/content";

export default function Home() {

  return (<div className="flex items-start justify-between ">
    <SiderBar />
    <main className="flex flex-col w-full h-full ">
      <div className="border-b-2 p-3">nav</div>
      <div className="h-screen w-full m-4">
     <Content/>
      </div>
    </main >
  </div>
  );
}
