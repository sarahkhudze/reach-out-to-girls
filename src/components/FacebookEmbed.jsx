// import { useEffect } from "react";

// export default function FacebookEmbed() {
//   useEffect(() => {
//     if (!window.FB) {
//       const script = document.createElement("script");
//       script.src =
//         "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
//       script.async = true;
//       document.body.appendChild(script);
//     } else {
//       window.FB.XFBML.parse();
//     }
//   }, []);

//   return (
//     <div>
//       <div
//         className="fb-page"
//         data-href="https://www.facebook.com/RoGMalawi"
//         data-tabs="timeline"
//         data-width="300"
//         data-height="400"
//         data-small-header="true"
//         data-hide-cover="true"
//         data-show-facepile="false"
//       ></div>
//     </div>
//   );
// }