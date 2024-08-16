require("dotenv").config();
const cloudinary = require("cloudinary").v2;

const uploaderSettings = {
  folder: `upload-all`, //con folder o public_id se puede crear subfolders
  // public_id: "nice-boat", //
  resource_type: "auto", // es el tipo de formato del elemto, puede ser webm para videos o image(para imagenes)o raw formats.
  use_filename: true, // utiliza el nombre del documento para guerdarlo en vez de usar un random id
  unique_filename: false, // remueve los caracteres que aparecen al final del nombre(se guarda un unico nombre y no sobreescribe la imágen)
};

(async () => {
  try {
    await cloudinary.uploader
      .upload("assets/boat-and-lake.jpg", uploaderSettings)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });

    await cloudinary.uploader
      .upload("assets/golfer.jpg", uploaderSettings)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });

    await cloudinary.uploader
      .upload("assets/happy-couple.jpg", uploaderSettings)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });

    await cloudinary.uploader
      .upload("assets/kitchen.jpg", uploaderSettings)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });

    await cloudinary.uploader
      .upload("assets/laughing-woman.jpg", uploaderSettings)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });

    await cloudinary.uploader
      .upload("assets/man-and-camera.jpg", uploaderSettings)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });

    await cloudinary.uploader
      .upload("assets/mussels-pot.jpg", uploaderSettings)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });

    await cloudinary.uploader
      .upload("assets/skateboarder.jpg", uploaderSettings)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });

    await cloudinary.uploader
      .upload("assets/woman-hiker.jpg", uploaderSettings)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        throw error;
      });
  } catch (error) {
    console.error("Se produjo un error:", error.message);
    console.error("Estatus de error:", error.http_code);
  }
})();

//upload images to be worked with in this course, assign public ID for referencing
// cloudinary.uploader.upload("assets/boat-and-lake.jpg", {
//   public_id: "boat-and-lake",
// });

// cloudinary.uploader.upload("assets/golfer.jpg", {
//   public_id: "golfer",
// });

// cloudinary.uploader.upload("assets/happy-couple.jpg", {
//   public_id: "happy-couple",
// });

// cloudinary.uploader.upload("assets/kitchen.jpg", {
//   public_id: "kitchen",
// });

// cloudinary.uploader.upload("assets/laughing-woman.jpg", {
//   public_id: "laughing-woman",
// });

// cloudinary.uploader.upload("assets/man-and-camera.jpg", {
//   public_id: "man-and-camera",
// });

// cloudinary.uploader.upload("assets/mussels-pot.jpg", {
//   public_id: "mussels-pot",
// });

// cloudinary.uploader.upload("assets/skateboarder.jpg", {
//   public_id: "skateboarder",
// });

// cloudinary.uploader.upload("assets/woman-hiker.jpg", {
//   public_id: "woman-hiker",
// });
