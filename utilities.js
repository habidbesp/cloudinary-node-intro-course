require("dotenv").config();
const cloudinary = require("cloudinary").v2;

// este método solo es para crear una URL en base a los datos que existen en mi envaronment, no hace request a clodinary
console.log(cloudinary.url("uploading-basics/nice-boat"));

// crea un html-img tag
console.log(cloudinary.image("uploading-basics/nice-boat"));
