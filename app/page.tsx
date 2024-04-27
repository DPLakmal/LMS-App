import SideBar from './_components/(sidebar)/sideBar'
import Nav from './_components/(navbar)/nav'
import Content from './_components/(sidebar)/content'
import MobileNavigationBar from './_components/mobile-navigationBar'

export default function Home() {
  return (
    <div className="flex flex-col h-screen w-screen">
      <Nav />
      <div className="flex-row flex">
        <div className="hidden md:flex ">
          <SideBar />
        </div>
        <div className="flex items-center justify-center w-full">
          <Content />
        </div>
      </div>
      <div className="flex md:hidden">
        <MobileNavigationBar />
      </div>
    </div>
  )
}
