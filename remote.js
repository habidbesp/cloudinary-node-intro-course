require("dotenv").config();
const cloudinary = require("cloudinary").v2;

console.log(
  cloudinary.url(
    "https://images.unsplash.com/photo-1465256410760-10640339c72c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    { type: "fetch" }
  )
);

// (async () => {
//   await cloudinary.uploader.upload(
//     "https://images.unsplash.com/photo-1465256410760-10640339c72c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     // { type: "fetch" },
//     (error, result) => {
//       console.log(result);
//     }
//   );
// })();
