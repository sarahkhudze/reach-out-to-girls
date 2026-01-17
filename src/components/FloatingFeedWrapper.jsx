// /* eslint-disable react/prop-types */
// // src/components/FloatingFeedWrapper.jsx
// import { useLocation } from "react-router-dom";
// import FloatingFeed from "./FloatingFeed";

// export default function FloatingFeedWrapper({ children }) {
//   const location = useLocation();

//   return (
//     <>
//       {children}
//       {/* Only show on exact homepage */}
//       {location.pathname === "/" && <FloatingFeed />}
//     </>
//   );
// }