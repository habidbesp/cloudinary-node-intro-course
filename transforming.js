require("dotenv").config();
const cloudinary = require("cloudinary").v2;

(async () => {
  try {
    // creating a url for an existing asset
    // console.log(cloudinary.url("upload-all/woman-hiker"));
    // ********************************************************
    // decreasing an image to 300px width
    // console.log(
    //   cloudinary.url("upload-all/woman-hiker", {
    //     transformation: { width: 300, crop: "scale" },
    //   })
    // );
    // creating a 300x300 image adding some white space up and down
    // console.log(
    //   cloudinary.url("upload-all/woman-hiker", {
    //     transformation: { width: 300, height: 300, crop: "pad" },
    //   })
    // );
    // La misma foto pero enviandola con formato optimizado automatico
    // console.log(
    //   cloudinary.url("upload-all/woman-hiker", {
    //     transformation: {
    //       width: 300,
    //       height: 300,
    //       crop: "pad",
    //       fetch_format: "auto",
    //     },
    //   })
    // );
    // console.log(
    //   cloudinary.url("upload-all/woman-hiker", {
    //     transformation: {
    //       width: 300,
    //       height: 300,
    //       crop: "pad",
    //     },
    //   })
    // );
    // Rounding-create circular images, the property "radius" can get other numerical values to get a les rounded picture: radius: 30
    // console.log(
    //   cloudinary.url("upload-all/man-and-camera", {
    //     transformation: {
    //       width: 300,
    //       height: 300,
    //       crop: "thumb",
    //       radius: "max",
    //       gravity: "auto",
    //       fetch_format: "auto",
    //       quality: "auto",
    //     },
    //   })
    // );
    // Add solid borders around the content with named or RGB colorss
    // console.log(
    //   cloudinary.url("upload-all/man-and-camera", {
    //     transformation: {
    //       width: 300,
    //       height: 300,
    //       crop: "thumb",
    //       gravity: "auto",
    //       fetch_format: "auto",
    //       quality: "auto",
    //       radius: "max",
    //       border: "10px_solid_rgb:bde4fb",
    //     },
    //   })
    // );
    // Auto Background Color, Pad an asset with a choosen bgc Cloudinary automatically set a background.
    // console.log(
    //   cloudinary.url("upload-all/kitchen", {
    //     transformation: {
    //       width: 300,
    //       height: 300,
    //       crop: "pad",
    //       fetch_format: "auto",
    //       quality: "auto",
    //       background: "auto",
    //     },
    //   })
    // );
    // Effects and Filters - colors
    // change intesities of colors, correct color imbalance, applying colorization filters, and removing or replacing colors.
    // console.log(
    //   cloudinary.url("upload-all/happy-couple", {
    //     transformation: {
    //       width: 300,
    //       height: 300,
    //       crop: "thumb",
    //       gravity: "face",
    //       fetch_format: "auto",
    //       quality: "auto",
    //       effect: "tint:40:magenta",
    //     },
    //   })
    // );
    // Effects and Filters - Improve
    // Change an asset's visual appearance with a large number of available effects and filters.
    // console.log(
    //   cloudinary.url("upload-all/boat-and-lake", {
    //     transformation: { effect: "improve:outdoor" },
    //   })
    // );
    // Effects and Filters - Artistic Filters
    // Change an asset's visual appearance with a large num,ber of available effects and filters.
    // Brighten highlights, intensify shadows, apply sepia-like filters, add vignetting and more with our ast:<filter> effects.
    // console.log(
    //   cloudinary.url("upload-all/boat-and-lake", {
    //     transformation: { effect: "art:zorro" },
    //   })
    // );
    // Overlays: Add text or another asset over the base asset
    // console.log(
    //   cloudinary.url("upload-all/mussels-pot", {
    //     transformation: [
    //       { width: 300, height: 300, crop: "thumb", gravity: "auto" },
    //       {
    //         overlay: {
    //           font_family: "Arial",
    //           font_size: "30",
    //           text: "Delicious",
    //         },
    //         color: "lime",
    //         height: "30",
    //         gravity: "south_west",
    //         x: 5,
    //         y: 5,
    //       },
    //     ],
    //   })
    // );
  } catch (error) {
    console.error("Se produjo un error:", error.message);
    console.error("Estatus de error:", error.http_code);
  }
})();
