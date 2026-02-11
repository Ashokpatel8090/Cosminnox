// import Sidebar from "@/components/dashboard/Sidebar"
// import Topbar from "@/components/dashboard/Topbar"

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <div className="flex h-screen w-full overflow-hidden bg-slate-100">
//       <Sidebar />

//       <div className="flex flex-col flex-1 h-full md:ml-64">
//         {/* Topbar should be static within the flex container */}
//         <Topbar />

//         {/* This is the scrollable container */}
//         <main className="flex-1 overflow-y-auto p-4 md:p-8">
//           {children}
//         </main>
//       </div>
//     </div>
//   )
// }


import Sidebar from "@/components/dashboard/Sidebar"
import Topbar from "@/components/dashboard/Topbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen w-full bg-slate-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1 h-full md:ml-64">
        <Topbar />

        {/* Scroll Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
