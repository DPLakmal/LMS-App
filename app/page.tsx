// import SideBar from './_components/(sidebar)/sideBar'
// import Nav from './_components/(navbar)/nav'
// import Content from './_components/(sidebar)/content'
// import MobileNavigationBar from './_components/mobile-navigationBar'
// import { getUserSession } from '@/lib/session'

// export default async function Home() {
//   const user = await getUserSession()
//   return (
//     <div className="flex flex-col h-screen w-screen">
//       <Nav />
//       <div className="flex-row flex">
//         <div className="hidden md:flex ">
//           <SideBar />
//         </div>
//         <div className="flex items-center justify-center w-full">
//           {JSON.stringify(user)}
//           <Content />
//         </div>
//       </div>
//       <div className="flex md:hidden">
//         <MobileNavigationBar />
//       </div>
//     </div>
//   )
// }


import { getUserSession } from '@/lib/session'

export default async function Home() {
  const user = await getUserSession()
  return <main className="">{JSON.stringify(user)}</main>
}