// const Sidebar = () => {
//   return (
//     <div className="lg:block fixed lg:static w-72 h-screen border-r">
//       <div className="space-y-4 py-4">
//         <div className="px-3 py-2">
//           <h2 className="mb-2 px-4 text-lg font-semibold">Vocabularies</h2>
//           <div className="space-y-1">
//             <button className="w-full flex items-center py-2 px-4 hover:bg-gray-100 rounded-md">
//               Overview
//             </button>
//             <button className="w-full flex items-center py-2 px-4 hover:bg-gray-100 rounded-md">
//               Lessons
//             </button>
//             <button className="w-full flex items-center py-2 px-4 hover:bg-gray-100 rounded-md">
//               Practice
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { Sidebar } from "@/components/lesson/Sidebar";
import { Outlet } from "react-router-dom";

export const SingleLesson = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
};
