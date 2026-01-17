// import { useState } from "react";
// import FacebookEmbed from "./FacebookEmbed";

// export default function FloatingFeed() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Floating Button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className="bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
//       >
//         🔔 Updates
//       </button>

//       {/* Floating Feed */}
//       {open && (
//         <div className="mt-3 w-80 h-96 bg-white rounded-xl shadow-2xl overflow-hidden">
//           <div className="flex justify-between items-center px-4 py-2 border-b">
//             <h3 className="font-semibold text-sm">Latest from ReachOut2Girls</h3>
//             <button
//               onClick={() => setOpen(false)}
//               className="text-gray-500 hover:text-red-500"
//             >
//               ✕
//             </button>
//           </div>

//           <div className="overflow-y-auto h-full p-2">
//             <FacebookEmbed />
//              floating feed ok
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }