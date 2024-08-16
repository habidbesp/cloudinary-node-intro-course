require("dotenv").config();
const cloudinary = require("cloudinary").v2;

(async () => {
  try {
    // *********************************************
    // list all assets
    // await cloudinary.api
    //   .resources()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
    // *********************************************
    // list all images with a given prefix
    // await cloudinary.api
    //   .resources({ type: "upload", prefix: "sample" })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
    // *********************************************
    //   Rename asset
    // await cloudinary.uploader
    //   .rename("méxico/cactáceas", "méxico/desierto_en_la_mañana", {
    //     overwrite: true,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
    // *********************************************
    // Destroy assets
    // await cloudinary.uploader
    //   .destroy("uploading-basics/nice-lake", { invalidate: true })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
    // *********************************************
    // delete multiple assets with Admin API
    // await cloudinary.api
    //   .delete_resources(["méxico"])
    //   .then((response) => console.log(response))
    //   .catch((error) => {
    //     throw error;
    //   });
    // *********************************************
    // Upload and tag an asset
    // await cloudinary.uploader
    //   .upload("assets/laughing-woman.jpg", {
    //     tags: "object, literally a tag",
    //     folder: "picture_with_tags",
    //     unique_filename: false,
    //     use_filename: true,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
    // *********************************************
    // tag an existing asset - two pictures reciving the tag "wonderfull"
    // await cloudinary.uploader
    //   .add_tag("wonderfull", [
    //     "picture_with_tags/laughing-woman",
    //     "uploading-basics/nice-lake",
    //   ])
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
    // *********************************************
    // remove all tags from assets adding public IDs in the array
    // await cloudinary.uploader
    //   .remove_all_tags([
    //     "picture_with_tags/laughing-woman",
    //     "uploading-basics/nice-lake",
    //   ])
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
    // *********************************************
    // Rename an asset and invalidate
    // await cloudinary.uploader
    //   .rename(
    //     "picture_with_tags/laughing-woman",
    //     "picture_with_tags/woman_and_dog",
    //     { invalidate: true }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     throw error;
    //   });
  } catch (error) {
    console.error("Se produjo un error:", error.message);
    console.error("Estatus de error:", error.http_code);
  }
})();
